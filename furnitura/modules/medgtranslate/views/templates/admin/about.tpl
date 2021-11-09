{*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade this module to newer
* versions in the future. If you wish to customize this module for your
* needs please refer to http://doc.prestashop.com/display/PS15/Overriding+default+behaviors
* #Overridingdefaultbehaviors-Overridingamodule%27sbehavior for more information.
*
* @author Mediacom87 <support@mediacom87.net>
* @copyright  Mediacom87
* @license    commercial license see tab in the module
*}

<p>{l s='Thanks for installing this module on your website.' mod='medgtranslate'}</p>
<p>{$description|escape:'htmlall':'UTF-8'}</p>

<p>{l s='Developped by' mod='medgtranslate'} <a class="redLink" href="https://www.mediacom87.fr/?utm_source=module&utm_medium=cpc&utm_campaign={$name|escape:'htmlall':'UTF-8'}" target="_blank"><strong>Mediacom87</strong></a>, {l s='which helps you to grow your business.' mod='medgtranslate'}</p>
<p>{l s='If you need support on this module:' mod='medgtranslate'} <a href="mailto:support@mediacom87.freshdesk.com?subject={l s='Need help on this module:' mod='medgtranslate'} {$name|escape:'htmlall':'UTF-8'} V.{$version|escape:'htmlall':'UTF-8'} - {if $tb_version}TB.{$tb_version|escape:'htmlall':'UTF-8'}{else}PS.{$ps_version|escape:'htmlall':'UTF-8'}{/if}" class="btn btn-info"><i class="{if $ps_version >= 1.6}icon-envelope-alt{else}fa fa-envelope-o{/if}"></i> {l s='Support' mod='medgtranslate'}</a></p>

<p><b>Module:</b> {$version|escape:'htmlall':'UTF-8'}</p>
{if $tb_version}
<p><b>thirty bees:</b> {$tb_version|escape:'htmlall':'UTF-8'}</p>
{else}
<p><b>PrestaShop:</b> {$ps_version|escape:'htmlall':'UTF-8'}</p>
{/if}
<p><b>PHP :</b> {$php_version|escape:'htmlall':'UTF-8'}</p>
