<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Component\Asset\Tests;

use PHPUnit\Framework\TestCase;
use Symfony\Component\Asset\UrlPackage;
use Symfony\Component\Asset\VersionStrategy\EmptyVersionStrategy;
use Symfony\Component\Asset\VersionStrategy\StaticVersionStrategy;

class UrlPackageTest extends TestCase
{
    /**
     * @dataProvider getConfigs
     */
    public function testGetUrl($baseUrls, $format, $path, $expected)
    {
        $package = new UrlPackage($baseUrls, new StaticVersionStrategy('v1', $format));
        $this->assertEquals($expected, $package->getUrl($path));
    }

    public function getConfigs()
    {
        return [
            ['http://example.net', '', 'http://example.com/foo', 'http://example.com/foo'],
            ['http://example.net', '', 'http://example.com/foo', 'http://example.com/foo'],
            ['http://example.net', '', '//example.com/foo', '//example.com/foo'],

            ['http://example.com', '', '/foo', 'http://example.com/foo?v1'],
            ['http://example.com', '', 'foo', 'http://example.com/foo?v1'],
            ['http://example.com/', '', 'foo', 'http://example.com/foo?v1'],
            ['http://example.com/foo', '', 'foo', 'http://example.com/foo/foo?v1'],
            ['http://example.com/foo/', '', 'foo', 'http://example.com/foo/foo?v1'],

            [['http://example.com'], '', '/foo', 'http://example.com/foo?v1'],
            [['http://example.com', 'http://example.net'], '', '/foo', 'http://example.com/foo?v1'],
            [['http://example.com', 'http://example.net'], '', '/fooa', 'http://example.net/fooa?v1'],

            ['http://example.com', 'version-%2$s/%1$s', '/foo', 'http://example.com/version-v1/foo'],
            ['http://example.com', 'version-%2$s/%1$s', 'foo', 'http://example.com/version-v1/foo'],
            ['http://example.com', 'version-%2$s/%1$s', 'foo/', 'http://example.com/version-v1/foo/'],
            ['http://example.com', 'version-%2$s/%1$s', '/foo/', 'http://example.com/version-v1/foo/'],
        ];
    }

    /**
     * @dataProvider getContextConfigs
     */
    public function testGetUrlWithContext($secure, $baseUrls, $format, $path, $expected)
    {
        $package = new UrlPackage($baseUrls, new StaticVersionStrategy('v1', $format), $this->getContext($secure));

        $this->assertEquals($expected, $package->getUrl($path));
    }

    public function getContextConfigs()
    {
        return [
            [false, 'http://example.com', '', 'foo', 'http://example.com/foo?v1'],
            [false, ['http://example.com'], '', 'foo', 'http://example.com/foo?v1'],
            [false, ['http://example.com', 'http://example.com'], '', 'foo', 'http://example.com/foo?v1'],
            [false, ['http://example.com', 'http://example.com'], '', 'fooa', 'http://example.com/fooa?v1'],
            [false, ['http://example.com/bar'], '', 'foo', 'http://example.com/bar/foo?v1'],
            [false, ['http://example.com/bar/'], '', 'foo', 'http://example.com/bar/foo?v1'],
            [false, ['//example.com/bar/'], '', 'foo', '//example.com/bar/foo?v1'],

            [true, ['http://example.com'], '', 'foo', 'http://example.com/foo?v1'],
            [true, ['http://example.com', 'http://example.com'], '', 'foo', 'http://example.com/foo?v1'],
        ];
    }

    public function testVersionStrategyGivesAbsoluteURL()
    {
        $versionStrategy = $this->getMockBuilder('Symfony\Component\Asset\VersionStrategy\VersionStrategyInterface')->getMock();
        $versionStrategy->expects($this->any())
            ->method('applyVersion')
            ->willReturn('http://cdn.com/bar/main.css');
        $package = new UrlPackage('http://example.com', $versionStrategy);

        $this->assertEquals('http://cdn.com/bar/main.css', $package->getUrl('main.css'));
    }

    /**
     * @expectedException \Symfony\Component\Asset\Exception\LogicException
     */
    public function testNoBaseUrls()
    {
        new UrlPackage([], new EmptyVersionStrategy());
    }

    /**
     * @expectedException \Symfony\Component\Asset\Exception\InvalidArgumentException
     */
    public function testWrongBaseUrl()
    {
        new UrlPackage(['not-a-url'], new EmptyVersionStrategy());
    }

    private function getContext($secure)
    {
        $context = $this->getMockBuilder('Symfony\Component\Asset\Context\ContextInterface')->getMock();
        $context->expects($this->any())->method('isSecure')->will($this->returnValue($secure));

        return $context;
    }
}
