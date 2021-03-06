<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Component\Form\Extension\Validator\Constraints;

use Symfony\Component\Form\FormInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\GroupSequence;
use Symfony\Component\Validator\Constraints\Valid;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;

/**
 * @author Bernhard Schussek <bschussek@gmail.com>
 */
class FormValidator extends ConstraintValidator
{
    /**
     * {@inheritdoc}
     */
    public function validate($form, Constraint $constraint)
    {
        if (!$constraint instanceof Form) {
            throw new UnexpectedTypeException($constraint, __NAMESPACE__.'\Form');
        }

        if (!$form instanceof FormInterface) {
            return;
        }

        /* @var FormInterface $form */
        $config = $form->getConfig();

        $validator = $this->context->getValidator()->inContext($this->context);

        if ($form->isSynchronized()) {
            // Validate the form data only if transformation succeeded
            $groups = self::getValidationGroups($form);
            $data = $form->getData();

            // Validate the data against its own constraints
            if ($form->isRoot() && (\is_object($data) || \is_array($data))) {
                if (($groups && \is_array($groups)) || ($groups instanceof GroupSequence && $groups->groups)) {
                    $validator->atPath('data')->validate($form->getData(), null, $groups);
                }
            }

            // Validate the data against the constraints defined
            // in the form
            $constraints = $config->getOption('constraints', []);

            if ($groups instanceof GroupSequence) {
                $validator->atPath('data')->validate($form->getData(), $constraints, $groups);
                // Otherwise validate a constraint only once for the first
                // matching group
                foreach ($groups as $group) {
                    if (\in_array($group, $constraint->groups)) {
                        $validator->atPath('data')->validate($form->getData(), $constraint, $group);
                        if (\count($this->context->getViolations()) > 0) {
                            break;
                        }
                    }
                }
            } else {
                foreach ($constraints as $constraint) {
                    // For the "Valid" constraint, validate the data in all groups
                    if ($constraint instanceof Valid) {
                        $validator->atPath('data')->validate($form->getData(), $constraint, $groups);

                        continue;
                    }

                    // Otherwise validate a constraint only once for the first
                    // matching group
                    foreach ($groups as $group) {
                        if (\in_array($group, $constraint->groups)) {
                            $validator->atPath('data')->validate($form->getData(), $constraint, $group);

                            // Prevent duplicate validation
                            continue 2;
                        }
                    }
                }
            }
        } else {
            $childrenSynchronized = true;

            /** @var FormInterface $child */
            foreach ($form as $child) {
                if (!$child->isSynchronized()) {
                    $childrenSynchronized = false;
                    break;
                }
            }

            // Mark the form with an error if it is not synchronized BUT all
            // of its children are synchronized. If any child is not
            // synchronized, an error is displayed there already and showing
            // a second error in its parent form is pointless, or worse, may
            // lead to duplicate errors if error bubbling is enabled on the
            // child.
            // See also http://github.com/symfony/symfony/issues/4359
            if ($childrenSynchronized) {
                $clientDataAsString = is_scalar($form->getViewData())
                    ? (string) $form->getViewData()
                    : \gettype($form->getViewData());

                $this->context->setConstraint($constraint);
                $this->context->buildViolation($config->getOption('invalid_message'))
                    ->setParameters(array_replace(['{{ value }}' => $clientDataAsString], $config->getOption('invalid_message_parameters')))
                    ->setInvalidValue($form->getViewData())
                    ->setCode(Form::NOT_SYNCHRONIZED_ERROR)
                    ->setCause($form->getTransformationFailure())
                    ->addViolation();
            }
        }

        // Mark the form with an error if it contains extra fields
        if (!$config->getOption('allow_extra_fields') && \count($form->getExtraData()) > 0) {
            $this->context->setConstraint($constraint);
            $this->context->buildViolation($config->getOption('extra_fields_message'))
                ->setParameter('{{ extra_fields }}', '"'.implode('", "', array_keys($form->getExtraData())).'"')
                ->setInvalidValue($form->getExtraData())
                ->setCode(Form::NO_SUCH_FIELD_ERROR)
                ->addViolation();
        }
    }

    /**
     * Returns the validation groups of the given form.
     *
     * @return string|GroupSequence|(string|GroupSequence)[] The validation groups
     */
    private static function getValidationGroups(FormInterface $form)
    {
        // Determine the clicked button of the complete form tree
        $clickedButton = null;

        if (method_exists($form, 'getClickedButton')) {
            $clickedButton = $form->getClickedButton();
        }

        if (null !== $clickedButton) {
            $groups = $clickedButton->getConfig()->getOption('validation_groups');

            if (null !== $groups) {
                return self::resolveValidationGroups($groups, $form);
            }
        }

        do {
            $groups = $form->getConfig()->getOption('validation_groups');

            if (null !== $groups) {
                return self::resolveValidationGroups($groups, $form);
            }

            $form = $form->getParent();
        } while (null !== $form);

        return [Constraint::DEFAULT_GROUP];
    }

    /**
     * Post-processes the validation groups option for a given form.
     *
     * @param string|GroupSequence|(string|GroupSequence)[]|callable $groups The validation groups
     * @param FormInterface                                          $form   The validated form
     *
     * @return (string|GroupSequence)[] The validation groups
     */
    private static function resolveValidationGroups($groups, FormInterface $form)
    {
        if (!\is_string($groups) && \is_callable($groups)) {
            $groups = \call_user_func($groups, $form);
        }

        if ($groups instanceof GroupSequence) {
            return $groups;
        }

        return (array) $groups;
    }
}
