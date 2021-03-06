/**
 * 2007-2017 PrestaShop
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
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

const $ = global.$;

/**
 * Makes a table sortable by columns.
 * This forces a page reload with more query parameters.
 */
class TableSorting {

  /**
   * @param {jQuery} table
   */
  constructor(table) {
    this.selector = '.ps-sortable-column';
    this.columns = $(table).find(this.selector);
  }

  /**
   * Attaches the listeners
   */
  attach() {
    this.columns.on('click', (e) => {
      const $column = $(e.delegateTarget);
      this._sortByColumn($column, this._getToggledSortDirection($column));
    });
  }

  /**
   * Sort using a column name
   * @param {string} columnName
   * @param {string} direction "asc" or "desc"
   */
  sortBy(columnName, direction) {
    const $column = this.columns.is(`[data-sort-col-name="${columnName}"]`);
    if (!$column) {
      throw new Error(`Cannot sort by "${columnName}": invalid column`);
    }

    this._sortByColumn($column, direction);
  }

  /**
   * Sort using a column element
   * @param {jQuery} column
   * @param {string} direction "asc" or "desc"
   * @private
   */
  _sortByColumn(column, direction) {
    window.location = this._getUrl(column.data('sortColName'), (direction === 'desc') ? 'desc' : 'asc');
  }

  /**
   * Returns the inverted direction to sort according to the column's current one
   * @param {jQuery} column
   * @return {string}
   * @private
   */
  _getToggledSortDirection(column) {
    return column.data('sortDirection') === 'asc' ? 'desc' : 'asc';
  }

  /**
   * Returns the url for the sorted table
   * @param {string} colName
   * @param {string} direction
   * @return {string}
   * @private
   */
  _getUrl(colName, direction) {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    params.set('orderBy', colName);
    params.set('sortOrder', direction);

    return url.toString();
  }
}

export default TableSorting;
