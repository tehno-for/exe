<?php
/**
 * NOTICE OF LICENSE
 *
 * Read in the module
 *
 * @author    Mediacom87 <support@mediacom87.net>
 * @copyright 2008-today Mediacom87
 * @license   define in the module
 */

class MedGtranslateClass
{
    public function __construct($module)
    {
        $this->module = $module;
    }

    public function isoCode($domain = false)
    {
        $iso = $this->module->context->language->iso_code;

        if ($iso == 'fr') {
            return 'fr';
        } elseif ($domain) {
            return 'com';
        } else {
            return 'en';
        }
    }
}
