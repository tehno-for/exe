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

namespace PrestaShop\PrestaShop\Adapter\SqlManager;

use RequestSql;

/**
 * Class SqlRequestFormDataValidator validates SqlRequest data that is submitted via from.
 *
 * @internal
 */
class SqlRequestFormDataValidator
{
    /**
     * @var SqlQueryValidator
     */
    private $sqlQueryValidator;

    /**
     * @param SqlQueryValidator $sqlQueryValidator
     */
    public function __construct(SqlQueryValidator $sqlQueryValidator)
    {
        $this->sqlQueryValidator = $sqlQueryValidator;
    }

    /**
     * Validate SqlRequest form data.
     *
     * @param array $data
     *
     * @return array Errors if any
     */
    public function validate(array $data)
    {
        if ($errors = $this->sqlQueryValidator->validate($data['sql'])) {
            return $errors;
        }

        $requestSql = new RequestSql();
        $requestSql->name = $data['name'];
        $requestSql->sql = $data['sql'];

        if (true !== $error = $requestSql->validateFields(false, true)) {
            return [$error];
        }

        return [];
    }
}
