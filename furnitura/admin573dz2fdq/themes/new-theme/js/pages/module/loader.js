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

const $ = window.$;

/**
 * Module Admin Page Loader.
 * @constructor
 */
class ModuleLoader {
  constructor() {
    ModuleLoader.handleImport();
    ModuleLoader.handleEvents();
  }

  static handleImport() {
    const moduleImport = $('#module-import');
    moduleImport.click(() => {
      moduleImport.addClass('onclick', 250, validate);
    });

    function validate() {
      setTimeout(
        () => {
          moduleImport.removeClass('onclick');
          moduleImport.addClass('validate', 450, callback);
        },
        2250
      );
    }
    function callback() {
      setTimeout(
        () => {
          moduleImport.removeClass('validate');
        },
        1250
      );
    }
  }

  static handleEvents() {
    $('body').on(
      'click',
      'a.module-read-more-grid-btn, a.module-read-more-list-btn',
      (event) => {
        event.preventDefault();
        const modulePoppin = $(event.target).data('target');

        $.get(event.target.href, (data) => {
          $(modulePoppin).html(data);
          $(modulePoppin).modal();
        });
      }
    );
  }
}

export default ModuleLoader;
