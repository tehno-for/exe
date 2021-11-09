{**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
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
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}


{block name='header_nav'}
<nav class="header-nav">
	<div class="container">
		<div class="hidden-md-down">
			{hook h='displayNav'}
		</div>
		<div class="hidden-lg-up  mobile">
			<div class="row row-mobile">
				<div class="mobile-left col-mobile col-md-4 col-xs-4">
					<div class="float-xs-left" id="menu-icon">
						<i class="material-icons d-inline">&#xE5D2;</i>
					</div>
					<div id="mobile_top_menu_wrapper" class="row hidden-lg-up" style="display:none;">
						<div class="top-header-mobile">
							<div id="_mobile_static"></div>
						</div>
						<div id="_mobile_currency_selector"></div>
						<div id="_mobile_language_selector"></div>
						<div class="menu-close">
							{l s='menu' d='Shop.Theme.Global'} <i class="material-icons float-xs-right">arrow_back</i>
						</div>
						<div class="menu-tabs">
							<div class="js-top-menu-bottom">
								<div id="_mobile_megamenu"></div>

							</div>

						</div>
					 </div>
				</div>
				<div class="mobile-center col-mobile col-md-4 col-xs-4">
					<div id="_mobile_logo"></div>
				</div>
				<div class="mobile-right col-mobile col-md-4 col-xs-4">
					<div id="_mobile_user_info"></div>
					<div id="_mobile_cart_block"></div>
				</div>
			</div>
			<div id="_mobile_search_block"></div>
		</div>
	</div>
</nav>
{/block}
{block name='header_top'}
    <div class="header-top hidden-md-down">
		<div class="container">
			<div class="row">
				<div class="col col col-md-3" id="_desktop_logo">
					{if $page.page_name == 'index'}
					<a href="{$urls.base_url}">
					<img class="logo img-responsive" src="{$shop.logo}" alt="{$shop.name}">
					</a>
					{else}
					<a href="{$urls.base_url}">
					<img class="logo img-responsive" src="{$shop.logo}" alt="{$shop.name}">
					</a>
					{/if}
				</div>
				<div class=" col col-md-9 col-sm-12 position-static display_top">
					{hook h='displayMegamenu'}
					{hook h='displayTop'}
				</div>

			</div>
		</div>

	</div>
  {hook h='displayNavFullWidth'}
  {literal}
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-84086704-2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-84086704-2');
  </script>
  {/literal}
{/block}
