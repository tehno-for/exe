<?php
/*
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/osl-3.0.php
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
 *  @author PrestaShop SA <contact@prestashop.com>
 *  @copyright  2007-2018 PrestaShop SA
 *  @license    https://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 *  International Registered Trademark & Property of PrestaShop SA
 */

namespace PrestaShopBundle\Form\Admin\Configure\ShopParameters\ProductPreferences;

use PrestaShop\PrestaShop\Adapter\Cache\CacheClearer;
use PrestaShop\PrestaShop\Core\Form\FormHandler;

/**
 * Class manages the data manipulated using forms
 * in "Configure > Shop Parameters > Product Settings" page.
 */
class ProductPreferencesFormHandler extends FormHandler
{
    /**
     * @var CacheClearer
     */
    private $cacheClearer;

    /**
     * {@inheritdoc}
     */
    public function save(array $data)
    {
        $errors = $this->formDataProvider->setData($data);

        if (empty($errors)) {
            $this->cacheClearer->clearSmartyCache();
            $this->cacheClearer->clearMediaCache();

            if (!$data['stock']['stock_management']) {
                $data['stock']['allow_ordering_oos'] = 1;
                $data['page']['display_quantities'] = 0;
            }
        }

        return parent::save($data);
    }

    /**
     * Inject the cache clearer if needed.
     *
     * @param CacheClearer $cacheClearer the Cache clearer
     */
    public function setCacheClearer(CacheClearer $cacheClearer)
    {
        $this->cacheClearer = $cacheClearer;
    }
}
