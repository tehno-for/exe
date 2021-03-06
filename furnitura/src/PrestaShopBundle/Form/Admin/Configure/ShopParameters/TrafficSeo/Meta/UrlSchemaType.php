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

namespace PrestaShopBundle\Form\Admin\Configure\ShopParameters\TrafficSeo\Meta;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class UrlSchemaType is responsible for providing form fields for
 * Shop parameters -> Traffic & Seo -> Seo & Urls -> Schema of urls block.
 */
class UrlSchemaType extends AbstractType
{
    /**
     * @var bool
     */
    private $isRewriteSettingEnabled;

    /**
     * UrlSchemaType constructor.
     *
     * @param bool $isRewriteSettingEnabled
     */
    public function __construct($isRewriteSettingEnabled)
    {
        $this->isRewriteSettingEnabled = $isRewriteSettingEnabled;
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($this->isRewriteSettingEnabled) {
            $builder
                ->add('product_rule', TextType::class)
                ->add('category_rule', TextType::class)
                ->add('layered_rule', TextType::class)
                ->add('supplier_rule', TextType::class)
                ->add('manufacturer_rule', TextType::class)
                ->add('cms_rule', TextType::class)
                ->add('cms_category_rule', TextType::class)
                ->add('module', TextType::class)
            ;
        }
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'label' => false,
        ]);
    }
}
