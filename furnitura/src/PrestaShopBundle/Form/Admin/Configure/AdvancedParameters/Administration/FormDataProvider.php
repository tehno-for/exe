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

namespace PrestaShopBundle\Form\Admin\Configure\AdvancedParameters\Administration;

use PrestaShop\PrestaShop\Adapter\Admin\NotificationsConfiguration;
use PrestaShop\PrestaShop\Adapter\Upload\UploadQuotaConfiguration;
use PrestaShop\PrestaShop\Adapter\GeneralConfiguration;
use PrestaShop\PrestaShop\Core\Form\FormDataProviderInterface;

/**
 * This class is responsible of managing the data manipulated using forms
 * in "Configure > Advanced Parameters > Administration" page.
 */
final class FormDataProvider implements FormDataProviderInterface
{
    /**
     * @var GeneralConfiguration
     */
    private $generalConfiguration;

    /**
     * @var UploadQuotaConfiguration
     */
    private $uploadConfiguration;

    /**
     * @var NotificationsConfiguration
     */
    private $notificationsConfiguration;

    public function __construct(
        GeneralConfiguration $generalConfiguration,
        UploadQuotaConfiguration $uploadConfiguration,
        NotificationsConfiguration $notificationsConfiguration
    ) {
        $this->generalConfiguration = $generalConfiguration;
        $this->uploadConfiguration = $uploadConfiguration;
        $this->notificationsConfiguration = $notificationsConfiguration;
    }

    /**
     * {@inheritdoc}
     */
    public function getData()
    {
        return [
            'general' => $this->generalConfiguration->getConfiguration(),
            'upload_quota' => $this->uploadConfiguration->getConfiguration(),
            'notifications' => $this->notificationsConfiguration->getConfiguration(),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function setData(array $data)
    {
        return $this->generalConfiguration->updateConfiguration($data['general']) +
            $this->uploadConfiguration->updateConfiguration($data['upload_quota']) +
            $this->notificationsConfiguration->updateConfiguration($data['notifications']);
    }
}
