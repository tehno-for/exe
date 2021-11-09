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

if (!defined('_TB_VERSION_')
    && !defined('_PS_VERSION_')) {
    exit;
}

include_once dirname(__FILE__).'/class/mediacom87.php';

class MedGtranslate extends Module
{
    public $smarty;
    public $context;
    public $controller;
    private $errors = array();
    protected $config_form = false;

    public function __construct()
    {
        $this->name = 'medgtranslate';
        $this->tab = 'front_office_features';
        $this->version = '1.2.0';
        $this->author = 'Mediacom87';
        $this->need_instance = 0;
        $this->module_key = '';
        $this->addons_id = '';
        $this->ps_versions_compliancy = array('min' => '1.5.0.0', 'max' => '1.7.99.99');

        /* boostrap */
        if (version_compare(_PS_VERSION_, '1.6.0.0', '>=')) {
            $this->bootstrap = true;
        } else {
            $this->bootstrap = false;
        }

        parent::__construct();

        $this->displayName = $this->l('Free module to translate your shop');
        $this->description = $this->l('Use Google to translate your store live');

        $this->description .= ' <div style="overflow:hidden;width:364px;height:45px;display:block"><iframe src="https://adsense.mediacom87.biz" width="728" height="90" marginheight="0" marginwidth="0" scrolling="no" style="border:none;-ms-zoom: 0.5;-moz-transform: scale(0.5);-moz-transform-origin: 0 0;-o-transform: scale(0.5);-o-transform-origin: 0 0;-webkit-transform: scale(0.5);-webkit-transform-origin: 0 0;"></iframe></div>';

        $this->mediacom87 = new MedGtranslateClass($this);

        $this->tpl_path = _PS_ROOT_DIR_.'/modules/'.$this->name;
    }

    public function install()
    {
        if (!parent::install()
            || !$this->registerHook('Footer')) {
            return false;
        }
        return true;
    }

    public function uninstall()
    {
        if (!parent::uninstall()) {
            return false;
        }

        return true;
    }

    public function getContent($tab = 'AdminModules')
    {
        $output = '';

        $this->context->smarty->assign(array(
                'tpl_path' => _PS_ROOT_DIR_.'/modules/'.$this->name,
                'img_path' => $this->_path.'views/img/',
                'description' => $this->description,
                'author' => $this->author,
                'name' => $this->name,
                'version' => $this->version,
                'ps_version' => defined('_PS_VERSION_') ? _PS_VERSION_ : null,
                'tb_version' => defined('_TB_VERSION_') ? _TB_VERSION_ : null,
                'php_version' => phpversion(),
                'iso_code' => $this->mediacom87->isoCode(),
                'iso_domain' => $this->mediacom87->isoCode(true),
                'languages' => Language::getLanguages(false),
                'id_active_lang' => (int) $this->context->language->id,
                'link' => $this->context->link,
                'countries' => Country::getCountries((int) $this->context->language->id),
            ));

        $this->context->controller->addJS(array(
                $this->_path.'libraries/js/riotcompiler.min.js',
                $this->_path.'libraries/js/pageloader.js',
                $this->_path.'views/js/back.js'
            ));

        $this->context->controller->addCSS($this->_path.'views/css/back.css');

        $output .= $this->display(__FILE__, 'views/templates/admin/admin.tpl');
        $output .= $this->display(__FILE__, 'libraries/prestui/ps-tags.tpl');

        return $output;
    }

    /**
     * hookHeader function.
     *
     * @access public
     * @param mixed $params
     * @return void
     */
    public function hookFooter()
    {
        if ($this->active) {
            return $this->display(__FILE__, 'footer.tpl');
        }
    }

    public function hookDisplayFooter()
    {
        return $this->hookFooter();
    }

    public function hookdisplayLeftColumn()
    {
        return $this->hookFooter();
    }

    public function hookdisplayRightColumn()
    {
        return $this->hookFooter();
    }

    public function hookdisplayTop()
    {
        return $this->hookFooter();
    }

    public function hookdisplayNav1()
    {
        return $this->hookFooter();
    }

    public function hookdisplayNav2()
    {
        return $this->hookFooter();
    }

    public function hookdisplayNavFullWidth()
    {
        return $this->hookFooter();
    }

    public function hookdisplayTopColumn()
    {
        return $this->hookFooter();
    }

	public function hookDisplayBanner()
	{
		return $this->hookFooter();
	}

	public function hookDisplayNav()
	{
		return $this->hookFooter();
	}
}
