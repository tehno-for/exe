<?php
/**
 * 2007-2018 PrestaShop.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

namespace PrestaShop\PrestaShop\Core\Grid\Filter;

use PrestaShop\PrestaShop\Core\Grid\Definition\GridDefinitionInterface;
use PrestaShop\PrestaShop\Core\Hook\HookDispatcherInterface;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\DependencyInjection\Container;

/**
 * Class FilterFormFactory is responsible for creating grid filter form.
 */
final class GridFilterFormFactory implements GridFilterFormFactoryInterface
{
    /**
     * @var FormFactoryInterface
     */
    private $formFactory;

    /**
     * @var HookDispatcherInterface
     */
    private $hookDispatcher;

    /**
     * @param FormFactoryInterface $formFactory
     * @param HookDispatcherInterface|null $hookDispatcher
     */
    public function __construct(
        FormFactoryInterface $formFactory,
        HookDispatcherInterface $hookDispatcher = null
    ) {
        $this->formFactory = $formFactory;

        if (null === $hookDispatcher) {
            @trigger_error('The $hookDispatcher parameter should not be null, inject your main HookDispatcherInterface service, or NullDispatcher if you don\'t need hooks.', E_USER_DEPRECATED);
        }
        $this->hookDispatcher = $hookDispatcher ? $hookDispatcher : new NullDispatcher();
    }

    /**
     * {@inheritdoc}
     */
    public function create(GridDefinitionInterface $definition)
    {
        $formBuilder = $this->formFactory->createNamedBuilder(
            $definition->getId(),
            FormType::class
        );

        /** @var FilterInterface $filter */
        foreach ($definition->getFilters()->all() as $filter) {
            $formBuilder->add(
                $filter->getName(),
                $filter->getType(),
                $filter->getTypeOptions()
            );
        }

        $this->hookDispatcher->dispatchWithParameters('action' . Container::camelize($definition->getId()) . 'GridFilterFormModifier', [
            'filter_form_builder' => $formBuilder,
        ]);

        return $formBuilder->getForm();
    }
}
