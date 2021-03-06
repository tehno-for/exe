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

namespace PrestaShop\PrestaShop\Core\Localization\Currency;

use PrestaShop\PrestaShop\Core\Localization\Currency;
use PrestaShop\PrestaShop\Core\Localization\Currency\RepositoryInterface as CurrencyRepositoryInterface;
use PrestaShop\PrestaShop\Core\Localization\Currency\DataRepositoryInterface as CurrencyDataRepositoryInterface;

/**
 * Currency repository class.
 *
 * Used to get Currency instances (by currency code for example)
 */
class Repository implements CurrencyRepositoryInterface
{
    /**
     * Available currencies, indexed by ISO code.
     * Lazy loaded.
     *
     * @var Currency[]
     */
    protected $currencies;

    /**
     * @var CurrencyDataRepositoryInterface
     */
    protected $dataRepository;

    public function __construct(CurrencyDataRepositoryInterface $dataRepository)
    {
        $this->dataRepository = $dataRepository;
    }

    /**
     * {@inheritdoc}
     */
    public function getCurrency($currencyCode)
    {
        if (!isset($this->currencies[$currencyCode])) {
            $data = $this->dataRepository->getDataByCurrencyCode($currencyCode);

            $this->currencies[$currencyCode] = new Currency(
                $data['isActive'],
                $data['conversionRate'],
                $data['isoCode'],
                $data['numericIsoCode'],
                $data['symbols'],
                $data['precision'],
                $data['names']
            );
        }

        return $this->currencies[$currencyCode];
    }

    /**
     * @return CurrencyCollection
     */
    public function getInstalledCurrencies()
    {
        // TODO : implement this method
    }
}
