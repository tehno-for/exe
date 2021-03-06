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

namespace PrestaShopBundle\Controller\Admin\Improve\Design;

use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController;
use Symfony\Component\HttpFoundation\Request;

/**
 * Displays themes from Addons under "Improve > Design > Themes Catalog".
 */
class ThemeCatalogController extends FrameworkBundleAdminController
{
    /**
     * Displays themes from Addons under "Improve > Design > Themes Catalog".
     *
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        $pageContent = file_get_contents($this->getAddonsUrl($request));

        return $this->render('@PrestaShop/Admin/Improve/Design/ThemesCatalogPage/addons_store.html.twig', [
            'pageContent' => $pageContent,
            'layoutHeaderToolbarBtn' => [],
            'layoutTitle' => $this->trans('Themes Catalog', 'Admin.Navigation.Menu'),
            'requireAddonsSearch' => true,
            'requireBulkActions' => false,
            'showContentHeader' => true,
            'enableSidebar' => true,
            'help_link' => $this->generateSidebarLink('AdminThemesCatalog'),
            'requireFilterStatus' => false,
        ]);
    }

    /**
     * @param Request $request
     *
     * @return string
     */
    private function getAddonsUrl(Request $request)
    {
        $psVersion = $this->get('prestashop.core.foundation.version')->getVersion();
        $parent_domain = $request->getSchemeAndHttpHost();
        $context = $this->getContext();
        $currencyCode = $context->currency->iso_code;
        $languageCode = $context->language->iso_code;
        $countryCode = $context->country->iso_code;
        $activity = $this->get('prestashop.adapter.legacy.configuration')->getInt('PS_SHOP_ACTIVITY');

        return "https://addons.prestashop.com/iframe/search-1.7.php?psVersion=$psVersion"
            . "&isoLang=$languageCode"
            . "&isoCurrency=$currencyCode"
            . "&isoCountry=$countryCode"
            . "&activity=$activity"
            . "&parentUrl=$parent_domain"
            . '&onlyThemes=1';
    }
}
