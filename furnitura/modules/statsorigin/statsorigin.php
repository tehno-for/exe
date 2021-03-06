<?php
/*
* 2007-2015 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* https://opensource.org/licenses/afl-3.0.php
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
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2015 PrestaShop SA
*  @license    https://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

if (!defined('_PS_VERSION_')) {
    exit;
}

class statsorigin extends ModuleGraph
{
    private $_html;

    public function __construct()
    {
        $this->name = 'statsorigin';
        $this->tab = 'analytics_stats';
        $this->version = '2.0.2';
        $this->author = 'PrestaShop';
        $this->need_instance = 0;

        parent::__construct();

        $this->displayName = $this->trans('Visitors origin', array(), 'Modules.Statsorigin.Admin');
        $this->description = $this->trans('Adds a graph displaying the websites your visitors came from to the Stats dashboard.', array(), 'Modules.Statsorigin.Admin');
        $this->ps_versions_compliancy = array('min' => '1.7.1.0', 'max' => _PS_VERSION_);
    }

    public function install()
    {
        return (parent::install() && $this->registerHook('AdminStatsModules'));
    }

    private function getOrigins($dateBetween)
    {
        $directLink = $this->trans('Direct link', array(), 'Admin.Orderscustomers.Notification');
        $sql = 'SELECT http_referer
				FROM '._DB_PREFIX_.'connections
				WHERE 1
					'.Shop::addSqlRestriction().'
					AND date_add BETWEEN '.$dateBetween;
        $result = Db::getInstance(_PS_USE_SQL_SLAVE_)->query($sql);
        $websites = array($directLink => 0);
        while ($row = Db::getInstance(_PS_USE_SQL_SLAVE_)->nextRow($result)) {
            if (!isset($row['http_referer']) || empty($row['http_referer'])) {
                ++$websites[$directLink];
            } else {
                $website = preg_replace('/^www./', '', parse_url($row['http_referer'], PHP_URL_HOST));
                if (!isset($websites[$website])) {
                    $websites[$website] = 1;
                } else {
                    ++$websites[$website];
                }
            }
        }
        arsort($websites);
        return $websites;
    }

    public function hookAdminStatsModules()
    {
        $websites = $this->getOrigins(ModuleGraph::getDateBetween());
        if (Tools::getValue('export')) {
            if (Tools::getValue('exportType') == 'top') {
                $this->csvExport(array('type' => 'pie'));
            }
        }
        $this->_html = '<div class="panel-heading">'.$this->trans('Origin', array(), 'Modules.Statsorigin.Admin').'</div>';
        if (count($websites)) {
            $this->_html .= '
			<div class="alert alert-info">
				'.$this->trans('In the tab, we break down the 10 most popular referral websites that bring customers to your online store.', array(), 'Modules.Statsorigin.Admin').'
			</div>
			<h4>'.$this->trans('Guide', array(), 'Admin.Global').'</h4>
			<div class="alert alert-warning">
				<h4>'.$this->trans('What is a referral website?', array(), 'Modules.Statsorigin.Admin').'</h4>
				<p>
					'.$this->trans('The referrer is the URL of the previous webpage from which a link was followed by the visitor.', array(), 'Modules.Statsorigin.Admin').'<br />
					'.$this->trans('A referrer also enables you to know which keywords visitors use in search engines when browsing for your online store.', array(), 'Modules.Statsorigin.Admin').'<br /><br />
					'.$this->trans('A referrer can be:', array(), 'Modules.Statsorigin.Admin').'
				</p>
				<ul>
					<li>'.$this->trans('Someone who posts a link to your shop.', array(), 'Modules.Statsorigin.Admin').'</li>
					<li>'.$this->trans('A partner who has agreed to a link exchange in order to attract new customers.', array(), 'Modules.Statsorigin.Admin').'</li>
				</ul>
			</div>
			<div class="row row-margin-bottom">
				<div class="col-lg-12">
					<div class="col-lg-8">
						'.$this->engine(array('type' => 'pie')).'
					</div>
					<div class="col-lg-4">
						<a href="'.Tools::safeOutput($_SERVER['REQUEST_URI'].'&export=1&exportType=top').'" class="btn btn-default">
							<i class="icon-cloud-upload"></i> '.$this->trans('CSV Export', array(), 'Modules.Statsorigin.Admin').'
						</a>
					</div>
				</div>
			</div>
			<table class="table">
				<thead>
					<tr>
						<th><span class="title_box active">'.$this->trans('Origin', array(), 'Modules.Statsorigin.Admin').'</span></th>
						<th><span class="title_box active">'.$this->trans('Total', array(), 'Admin.Global').'</span></th>
					</tr>
				</thead>
				<tbody>';
            foreach ($websites as $website => $total) {
                $this->_html .= '
					<tr>
						<td>'.(!strstr($website, ' ') ? '<a href="'.Tools::getProtocol().$website.'">' : '').$website.(!strstr($website, ' ') ? '</a>' : '').'</td><td>'.$total.'</td>
					</tr>';
            }
            $this->_html .= '
				</tbody>
			</table>';
        } else {
            $this->_html .= '<p>'.$this->trans('Direct links only', array(), 'Modules.Statsorigin.Admin').'</p>';
        }
        return $this->_html;
    }

    protected function getData($layers)
    {
        $this->_titles['main'] = $this->trans('Top ten referral websites', array(), 'Modules.Statsorigin.Admin');
        $websites = $this->getOrigins($this->getDate());
        $total = 0;
        $total2 = 0;
        $i = 0;
        foreach ($websites as $website => $totalRow) {
            if (!$totalRow) {
                continue;
            }
            $total += $totalRow;
            if ($i++ < 9) {
                $this->_legend[] = $website;
                $this->_values[] = $totalRow;
                $total2 += $totalRow;
            }
        }
        if ($total != $total2) {
            $this->_legend[] = $this->trans('Others', array(), 'Modules.Statsorigin.Admin');
            $this->_values[] = $total - $total2;
        }
    }
}
