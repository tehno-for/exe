<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Component\Form\Tests\Extension\Validator\Constraints;

use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Form\Extension\Validator\Constraints\Form;
use Symfony\Component\Form\Extension\Validator\Constraints\FormValidator;
use Symfony\Component\Form\FormBuilder;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\SubmitButtonBuilder;
use Symfony\Component\Validator\Constraints\GroupSequence;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\Valid;
use Symfony\Component\Validator\Test\ConstraintValidatorTestCase;

/**
 * @author Bernhard Schussek <bschussek@gmail.com>
 */
class FormValidatorTest extends ConstraintValidatorTestCase
{
    /**
     * @var \PHPUnit_Framework_MockObject_MockObject
     */
    private $dispatcher;

    /**
     * @var \PHPUnit_Framework_MockObject_MockObject
     */
    private $factory;

    /**
     * @var \PHPUnit_Framework_MockObject_MockObject
     */
    protected $serverParams;

    protected function setUp()
    {
        $this->dispatcher = $this->getMockBuilder('Symfony\Component\EventDispatcher\EventDispatcherInterface')->getMock();
        $this->factory = $this->getMockBuilder('Symfony\Component\Form\FormFactoryInterface')->getMock();
        $this->serverParams = $this->getMockBuilder('Symfony\Component\Form\Extension\Validator\Util\ServerParams')->setMethods(['getNormalizedIniPostMaxSize', 'getContentLength'])->getMock();

        parent::setUp();

        $this->constraint = new Form();
    }

    protected function createValidator()
    {
        return new FormValidator($this->serverParams);
    }

    public function testValidate()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();
        $options = ['validation_groups' => ['group1', 'group2']];
        $form = $this->getBuilder('name', '\stdClass', $options)
            ->setData($object)
            ->getForm();

        $this->expectValidateAt(0, 'data', $object, ['group1', 'group2']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testValidateConstraints()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();
        $constraint1 = new NotNull(['groups' => ['group1', 'group2']]);
        $constraint2 = new NotBlank(['groups' => 'group2']);

        $options = [
            'validation_groups' => ['group1', 'group2'],
            'constraints' => [$constraint1, $constraint2],
        ];
        $form = $this->getBuilder('name', '\stdClass', $options)
            ->setData($object)
            ->getForm();

        // First default constraints
        $this->expectValidateAt(0, 'data', $object, ['group1', 'group2']);

        // Then custom constraints
        $this->expectValidateValueAt(1, 'data', $object, $constraint1, 'group1');
        $this->expectValidateValueAt(2, 'data', $object, $constraint2, 'group2');

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testValidateChildIfValidConstraint()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $parent = $this->getBuilder('parent')
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->getForm();
        $options = [
            'validation_groups' => ['group1', 'group2'],
            'constraints' => [new Valid()],
        ];
        $form = $this->getBuilder('name', '\stdClass', $options)->getForm();
        $parent->add($form);

        $form->setData($object);

        $this->expectValidateAt(0, 'data', $object, ['group1', 'group2']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testDontValidateIfParentWithoutValidConstraint()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $parent = $this->getBuilder('parent', null)
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->getForm();
        $options = ['validation_groups' => ['group1', 'group2']];
        $form = $this->getBuilder('name', '\stdClass', $options)->getForm();
        $parent->add($form);

        $form->setData($object);

        $this->expectNoValidate();

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testMissingConstraintIndex()
    {
        $object = new \stdClass();
        $form = new FormBuilder('name', '\stdClass', $this->dispatcher, $this->factory);
        $form = $form->setData($object)->getForm();

        $this->expectValidateAt(0, 'data', $object, ['Default']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testValidateConstraintsOptionEvenIfNoValidConstraint()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();
        $constraint1 = new NotNull(['groups' => ['group1', 'group2']]);
        $constraint2 = new NotBlank(['groups' => 'group2']);

        $parent = $this->getBuilder('parent', null)
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->getForm();
        $options = [
            'validation_groups' => ['group1', 'group2'],
            'constraints' => [$constraint1, $constraint2],
        ];
        $form = $this->getBuilder('name', '\stdClass', $options)
            ->setData($object)
            ->getForm();
        $parent->add($form);

        $this->expectValidateValueAt(0, 'data', $object, $constraint1, 'group1');
        $this->expectValidateValueAt(1, 'data', $object, $constraint2, 'group2');

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testDontValidateIfNoValidationGroups()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $form = $this->getBuilder('name', '\stdClass', [
                'validation_groups' => [],
            ])
            ->setData($object)
            ->getForm();

        $form->setData($object);

        $this->expectNoValidate();

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testDontValidateConstraintsIfNoValidationGroups()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();
        $constraint1 = $this->getMockBuilder('Symfony\Component\Validator\Constraint')->getMock();
        $constraint2 = $this->getMockBuilder('Symfony\Component\Validator\Constraint')->getMock();

        $options = [
            'validation_groups' => [],
            'constraints' => [$constraint1, $constraint2],
        ];
        $form = $this->getBuilder('name', '\stdClass', $options)
            ->setData($object)
            ->getForm();

        // Launch transformer
        $form->submit('foo');

        $this->expectNoValidate();

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testDontValidateIfNotSynchronized()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $form = $this->getBuilder('name', '\stdClass', [
                'invalid_message' => 'invalid_message_key',
                // Invalid message parameters must be supported, because the
                // invalid message can be a translation key
                // see http://github.com/symfony/symfony/issues/5144
                'invalid_message_parameters' => ['{{ foo }}' => 'bar'],
            ])
            ->setData($object)
            ->addViewTransformer(new CallbackTransformer(
                function ($data) { return $data; },
                function () { throw new TransformationFailedException(); }
            ))
            ->getForm();

        // Launch transformer
        $form->submit('foo');

        $this->expectNoValidate();

        $this->validator->validate($form, new Form());

        $this->buildViolation('invalid_message_key')
            ->setParameter('{{ value }}', 'foo')
            ->setParameter('{{ foo }}', 'bar')
            ->setInvalidValue('foo')
            ->setCode(Form::NOT_SYNCHRONIZED_ERROR)
            ->setCause($form->getTransformationFailure())
            ->assertRaised();
    }

    public function testAddInvalidErrorEvenIfNoValidationGroups()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $form = $this->getBuilder('name', '\stdClass', [
                'invalid_message' => 'invalid_message_key',
                // Invalid message parameters must be supported, because the
                // invalid message can be a translation key
                // see http://github.com/symfony/symfony/issues/5144
                'invalid_message_parameters' => ['{{ foo }}' => 'bar'],
                'validation_groups' => [],
            ])
            ->setData($object)
            ->addViewTransformer(new CallbackTransformer(
                    function ($data) { return $data; },
                    function () { throw new TransformationFailedException(); }
                ))
            ->getForm();

        // Launch transformer
        $form->submit('foo');

        $this->expectNoValidate();

        $this->validator->validate($form, new Form());

        $this->buildViolation('invalid_message_key')
            ->setParameter('{{ value }}', 'foo')
            ->setParameter('{{ foo }}', 'bar')
            ->setInvalidValue('foo')
            ->setCode(Form::NOT_SYNCHRONIZED_ERROR)
            ->setCause($form->getTransformationFailure())
            ->assertRaised();
    }

    public function testDontValidateConstraintsIfNotSynchronized()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();
        $constraint1 = $this->getMockBuilder('Symfony\Component\Validator\Constraint')->getMock();
        $constraint2 = $this->getMockBuilder('Symfony\Component\Validator\Constraint')->getMock();

        $options = [
            'invalid_message' => 'invalid_message_key',
            'validation_groups' => ['group1', 'group2'],
            'constraints' => [$constraint1, $constraint2],
        ];
        $form = $this->getBuilder('name', '\stdClass', $options)
            ->setData($object)
            ->addViewTransformer(new CallbackTransformer(
                function ($data) { return $data; },
                function () { throw new TransformationFailedException(); }
            ))
            ->getForm();

        // Launch transformer
        $form->submit('foo');

        $this->expectNoValidate();

        $this->validator->validate($form, new Form());

        $this->buildViolation('invalid_message_key')
            ->setParameter('{{ value }}', 'foo')
            ->setInvalidValue('foo')
            ->setCode(Form::NOT_SYNCHRONIZED_ERROR)
            ->setCause($form->getTransformationFailure())
            ->assertRaised();
    }

    // http://github.com/symfony/symfony/issues/4359
    public function testDontMarkInvalidIfAnyChildIsNotSynchronized()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $failingTransformer = new CallbackTransformer(
            function ($data) { return $data; },
            function () { throw new TransformationFailedException(); }
        );

        $form = $this->getBuilder('name', '\stdClass')
            ->setData($object)
            ->addViewTransformer($failingTransformer)
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->add(
                $this->getBuilder('child')
                    ->addViewTransformer($failingTransformer)
            )
            ->getForm();

        // Launch transformer
        $form->submit(['child' => 'foo']);

        $this->expectNoValidate();

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testHandleGroupSequenceValidationGroups()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();
        $options = ['validation_groups' => new GroupSequence(['group1', 'group2'])];
        $form = $this->getBuilder('name', '\stdClass', $options)
            ->setData($object)
            ->getForm();

        $this->expectValidateAt(0, 'data', $object, new GroupSequence(['group1', 'group2']));
        $this->expectValidateAt(1, 'data', $object, new GroupSequence(['group1', 'group2']));

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testHandleCallbackValidationGroups()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();
        $options = ['validation_groups' => [$this, 'getValidationGroups']];
        $form = $this->getBuilder('name', '\stdClass', $options)
            ->setData($object)
            ->getForm();

        $this->expectValidateAt(0, 'data', $object, ['group1', 'group2']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testDontExecuteFunctionNames()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();
        $options = ['validation_groups' => 'header'];
        $form = $this->getBuilder('name', '\stdClass', $options)
            ->setData($object)
            ->getForm();

        $this->expectValidateAt(0, 'data', $object, ['header']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testHandleClosureValidationGroups()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();
        $options = ['validation_groups' => function (FormInterface $form) {
            return ['group1', 'group2'];
        }];
        $form = $this->getBuilder('name', '\stdClass', $options)
            ->setData($object)
            ->getForm();

        $this->expectValidateAt(0, 'data', $object, ['group1', 'group2']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testUseValidationGroupOfClickedButton()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $parent = $this->getBuilder('parent')
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->getForm();
        $form = $this->getForm('name', '\stdClass', [
            'validation_groups' => 'form_group',
            'constraints' => [new Valid()],
        ]);

        $parent->add($form);
        $parent->add($this->getSubmitButton('submit', [
            'validation_groups' => 'button_group',
        ]));

        $parent->submit(['name' => $object, 'submit' => '']);

        $this->expectValidateAt(0, 'data', $object, ['button_group']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testDontUseValidationGroupOfUnclickedButton()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $parent = $this->getBuilder('parent')
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->getForm();
        $form = $this->getForm('name', '\stdClass', [
            'validation_groups' => 'form_group',
            'constraints' => [new Valid()],
        ]);

        $parent->add($form);
        $parent->add($this->getSubmitButton('submit', [
            'validation_groups' => 'button_group',
        ]));

        $form->setData($object);

        $this->expectValidateAt(0, 'data', $object, ['form_group']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testUseInheritedValidationGroup()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $parentOptions = ['validation_groups' => 'group'];
        $parent = $this->getBuilder('parent', null, $parentOptions)
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->getForm();
        $formOptions = ['constraints' => [new Valid()]];
        $form = $this->getBuilder('name', '\stdClass', $formOptions)->getForm();
        $parent->add($form);

        $form->setData($object);

        $this->expectValidateAt(0, 'data', $object, ['group']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testUseInheritedCallbackValidationGroup()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $parentOptions = ['validation_groups' => [$this, 'getValidationGroups']];
        $parent = $this->getBuilder('parent', null, $parentOptions)
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->getForm();
        $formOptions = ['constraints' => [new Valid()]];
        $form = $this->getBuilder('name', '\stdClass', $formOptions)->getForm();
        $parent->add($form);

        $form->setData($object);

        $this->expectValidateAt(0, 'data', $object, ['group1', 'group2']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testUseInheritedClosureValidationGroup()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();

        $parentOptions = [
            'validation_groups' => function (FormInterface $form) {
                return ['group1', 'group2'];
            },
        ];
        $parent = $this->getBuilder('parent', null, $parentOptions)
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->getForm();
        $formOptions = ['constraints' => [new Valid()]];
        $form = $this->getBuilder('name', '\stdClass', $formOptions)->getForm();
        $parent->add($form);

        $form->setData($object);

        $this->expectValidateAt(0, 'data', $object, ['group1', 'group2']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testAppendPropertyPath()
    {
        $object = $this->getMockBuilder('\stdClass')->getMock();
        $form = $this->getBuilder('name', '\stdClass')
            ->setData($object)
            ->getForm();

        $this->expectValidateAt(0, 'data', $object, ['Default']);

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testDontWalkScalars()
    {
        $form = $this->getBuilder()
            ->setData('scalar')
            ->getForm();

        $this->expectNoValidate();

        $this->validator->validate($form, new Form());

        $this->assertNoViolation();
    }

    public function testViolationIfExtraData()
    {
        $form = $this->getBuilder('parent', null, ['extra_fields_message' => 'Extra!'])
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->add($this->getBuilder('child'))
            ->getForm();

        $form->submit(['foo' => 'bar']);

        $this->expectNoValidate();

        $this->validator->validate($form, new Form());

        $this->buildViolation('Extra!')
            ->setParameter('{{ extra_fields }}', '"foo"')
            ->setInvalidValue(['foo' => 'bar'])
            ->setCode(Form::NO_SUCH_FIELD_ERROR)
            ->assertRaised();
    }

    public function testViolationFormatIfMultipleExtraFields()
    {
        $form = $this->getBuilder('parent', null, ['extra_fields_message' => 'Extra!'])
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->add($this->getBuilder('child'))
            ->getForm();

        $form->submit(['foo' => 'bar', 'baz' => 'qux', 'quux' => 'quuz']);

        $this->expectNoValidate();

        $this->validator->validate($form, new Form());

        $this->buildViolation('Extra!')
            ->setParameter('{{ extra_fields }}', '"foo", "baz", "quux"')
            ->setInvalidValue(['foo' => 'bar', 'baz' => 'qux', 'quux' => 'quuz'])
            ->setCode(Form::NO_SUCH_FIELD_ERROR)
            ->assertRaised();
    }

    public function testNoViolationIfAllowExtraData()
    {
        $context = $this->getMockExecutionContext();

        $form = $this
            ->getBuilder('parent', null, ['allow_extra_fields' => true])
            ->setCompound(true)
            ->setDataMapper($this->getDataMapper())
            ->add($this->getBuilder('child'))
            ->getForm();

        $form->submit(['foo' => 'bar']);

        $context->expects($this->never())
            ->method('addViolation');

        $this->validator->initialize($context);
        $this->validator->validate($form, new Form());
    }

    /**
     * Access has to be public, as this method is called via callback array
     * in {@link testValidateFormDataCanHandleCallbackValidationGroups()}
     * and {@link testValidateFormDataUsesInheritedCallbackValidationGroup()}.
     */
    public function getValidationGroups(FormInterface $form)
    {
        return ['group1', 'group2'];
    }

    private function getMockExecutionContext()
    {
        $context = $this->getMockBuilder('Symfony\Component\Validator\Context\ExecutionContextInterface')->getMock();
        $validator = $this->getMockBuilder('Symfony\Component\Validator\Validator\ValidatorInterface')->getMock();
        $contextualValidator = $this->getMockBuilder('Symfony\Component\Validator\Validator\ContextualValidatorInterface')->getMock();

        $validator->expects($this->any())
            ->method('inContext')
            ->with($context)
            ->will($this->returnValue($contextualValidator));

        $context->expects($this->any())
            ->method('getValidator')
            ->will($this->returnValue($validator));

        return $context;
    }

    /**
     * @param string $name
     * @param string $dataClass
     * @param array  $options
     *
     * @return FormBuilder
     */
    private function getBuilder($name = 'name', $dataClass = null, array $options = [])
    {
        $options = array_replace([
            'constraints' => [],
            'invalid_message_parameters' => [],
        ], $options);

        return new FormBuilder($name, $dataClass, $this->dispatcher, $this->factory, $options);
    }

    private function getForm($name = 'name', $dataClass = null, array $options = [])
    {
        return $this->getBuilder($name, $dataClass, $options)->getForm();
    }

    private function getSubmitButton($name = 'name', array $options = [])
    {
        $builder = new SubmitButtonBuilder($name, $options);

        return $builder->getForm();
    }

    /**
     * @return \PHPUnit_Framework_MockObject_MockObject
     */
    private function getDataMapper()
    {
        return $this->getMockBuilder('Symfony\Component\Form\DataMapperInterface')->getMock();
    }
}
