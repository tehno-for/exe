/*
* 2007-2015 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* https://opensource.org/licenses/afl-3.0.php
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
*  @copyright  2007-2015 PrestaShop SA
*  @version  Release: $Revision$
*  @license    https://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

jQuery(document).ready(function ($) {
	var logo = $(".logo-slider");
	logo.owlCarousel({
		autoPlay : false ,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		nav: true,
		dots : false,
		responsive:{
			0:{
				items:2, /*Userchange +1, +2, +3, +4, +5 (+1 after it)*/
			},
			480:{
				items:4,
			},
			768:{
				items:6,
				nav:false,
			},
			992:{
				items:7,
			},
			1200:{
				items:8,
			}
		}
	});
});
