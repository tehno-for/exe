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

namespace PrestaShop\PrestaShop\Adapter\Language;

use Language;
use PrestaShop\PrestaShop\Core\Foundation\Version;
use PrestaShop\PrestaShop\Core\Language\Pack\LanguagePackInstallerInterface;
use Symfony\Component\Translation\TranslatorInterface;

/**
 * Class LanguagePack is responsible for the language pack actions regarding installation.
 */
final class LanguagePackInstaller implements LanguagePackInstallerInterface
{
    /**
     * @var Version
     */
    private $version;

    /**
     * @var TranslatorInterface
     */
    private $translator;

    /**
     * LanguagePackInstaller constructor.
     *
     * @param TranslatorInterface $translator
     * @param Version $version
     */
    public function __construct(TranslatorInterface $translator, Version $version)
    {
        $this->version = $version;
        $this->translator = $translator;
    }

    /**
     * {@inheritdoc}
     */
    public function downloadAndInstallLanguagePack($iso)
    {
        $result = Language::downloadAndInstallLanguagePack($iso, $this->version->getVersion());

        if (false === $result) {
            return [
                $this->translator->trans(
                    'Fatal error: ISO code is not correct',
                    [],
                    'Admin.International.Notification'
                ),
            ];
        }

        if (is_array($result) && !empty($result)) {
            return $result;
        }

        return [];
    }
}
