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

namespace PrestaShop\PrestaShop\Adapter\Feature;

use PrestaShop\PrestaShop\Adapter\Entity\Shop;
use PrestaShop\PrestaShop\Adapter\Configuration;
use PrestaShop\PrestaShop\Core\Feature\FeatureInterface;

/**
 * Class MultistoreFeature provides data about multishop feature usage.
 *
 * @internal
 */
final class MultistoreFeature implements FeatureInterface
{
    /**
     * @var Configuration
     */
    private $configuration;

    /**
     * @param Configuration $configuration
     */
    public function __construct(Configuration $configuration)
    {
        $this->configuration = $configuration;
    }

    /**
     * {@inheritdoc}
     */
    public function isUsed()
    {
        // internally it checks if feature is active
        // and at least 2 shops exist
        return Shop::isFeatureActive();
    }

    /**
     * {@inheritdoc}
     */
    public function isActive()
    {
        return $this->configuration->getBoolean('PS_MULTISHOP_FEATURE_ACTIVE');
    }

    /**
     * {@inheritdoc}
     */
    public function enable()
    {
        $this->configuration->set('PS_MULTISHOP_FEATURE_ACTIVE', 1);
    }

    /**
     * {@inheritdoc}
     */
    public function disable()
    {
        $this->configuration->set('PS_MULTISHOP_FEATURE_ACTIVE', 0);
    }

    /**
     * {@inheritdoc}
     */
    public function update($status)
    {
        $status ? $this->enable() : $this->disable();
    }
}
