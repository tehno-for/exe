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

namespace PrestaShopBundle\Security\Admin;

use Access;
use Psr\Cache\CacheItemPoolInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use PrestaShop\PrestaShop\Adapter\LegacyContext;

/**
 * Class EmployeeProvider To retrieve Employee entities for the Symfony security components.
 */
class EmployeeProvider implements UserProviderInterface
{
    const ROLE_EMPLOYEE = 'ROLE_EMPLOYEE';

    private $legacyContext;

    /**
     * @var CacheItemPoolInterface
     */
    private $cache;

    public function __construct(LegacyContext $context, CacheItemPoolInterface $cache)
    {
        $this->legacyContext = $context->getContext();
        $this->cache = $cache;
    }

    /**
     * Fetch the Employee entity that matches the given username.
     * Cache system doesn't supports "@" character, so we rely on a sha1 expression.
     *
     * @param string $username
     *
     * @return Employee
     *
     * @throws \Psr\Cache\InvalidArgumentException
     * @throws \Symfony\Component\Security\Core\Exception\UsernameNotFoundException
     */
    public function loadUserByUsername($username)
    {
        $cacheKey = sha1($username);
        $cachedEmployee = $this->cache->getItem("app.employees_${cacheKey}");

        if ($cachedEmployee->isHit()) {
            return $cachedEmployee->get();
        }

        if (
            null !== $this->legacyContext->employee
            && $this->legacyContext->employee->email === $username
        ) {
            $employee = new Employee($this->legacyContext->employee);
            $employee->setRoles(
                array_merge([self::ROLE_EMPLOYEE], Access::getRoles($this->legacyContext->employee->id_profile))
            );

            $cachedEmployee->set($employee);
            $this->cache->save($cachedEmployee);

            return $cachedEmployee->get();
        }

        throw new UsernameNotFoundException(
            sprintf('Username "%s" does not exist.', $username)
        );
    }

    /**
     * Reload an Employee and returns a fresh instance.
     *
     * @param UserInterface $employee
     *
     * @return Employee
     */
    public function refreshUser(UserInterface $employee)
    {
        if (!$employee instanceof Employee) {
            throw new UnsupportedUserException(
                sprintf('Instances of "%s" are not supported.', get_class($employee))
            );
        }

        return $this->loadUserByUsername($employee->getUsername());
    }

    /**
     * Tests if the given class supports the security layer. Here, only Employee class is allowed to be used to authenticate.
     *
     * @param string $class
     *
     * @return bool
     */
    public function supportsClass($class)
    {
        return $class === 'PrestaShopBundle\Security\Admin\Employee';
    }
}
