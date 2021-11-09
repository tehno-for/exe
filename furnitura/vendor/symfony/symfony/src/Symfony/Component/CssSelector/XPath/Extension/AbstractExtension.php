<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Component\CssSelector\XPath\Extension;

/**
 * XPath expression translator abstract extension.
 *
 * This component is a port of the Python cssselect library,
 * which is copyright Ian Bicking, @see http://github.com/SimonSapin/cssselect.
 *
 * @author Jean-François Simon <jeanfrancois.simon@sensiolabs.com>
 *
 * @internal
 */
abstract class AbstractExtension implements ExtensionInterface
{
    /**
     * {@inheritdoc}
     */
    public function getNodeTranslators()
    {
        return [];
    }

    /**
     * {@inheritdoc}
     */
    public function getCombinationTranslators()
    {
        return [];
    }

    /**
     * {@inheritdoc}
     */
    public function getFunctionTranslators()
    {
        return [];
    }

    /**
     * {@inheritdoc}
     */
    public function getPseudoClassTranslators()
    {
        return [];
    }

    /**
     * {@inheritdoc}
     */
    public function getAttributeMatchingTranslators()
    {
        return [];
    }
}
