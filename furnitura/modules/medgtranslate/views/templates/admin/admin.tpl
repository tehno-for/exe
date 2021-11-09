{*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade this module to newer
* versions in the future. If you wish to customize this module for your
* needs please refer to http://doc.prestashop.com/display/PS15/Overriding+default+behaviors
* #Overridingdefaultbehaviors-Overridingamodule%27sbehavior for more information.
*
*   @author Mediacom87 <support@mediacom87.net>
*   @copyright  Mediacom87
*   @license    commercial license see tab in the module
*}

{if $ps_version < 1.6}
<script src="https://use.fontawesome.com/8ebcaf88e9.js" async></script>
{/if}

<div id="chargement">
    <i class="{if $ps_version >= 1.6}process-icon-refresh icon-spin icon-pulse{else}fa fa-refresh fa-spin fa-pulse clear{/if}"></i> {l s='Loading...' mod='medgtranslate'}<span id="chargement-infos"></span>
</div>

<script type="text/javascript">

    $(document).ready(function() {ldelim}

        $.pageLoader();

    {rdelim});

</script>

<ps-tabs position="top">

    <ps-tab label="{l s='Informations' mod='medgtranslate'}" active="true" id="tab20" icon="icon-info" fa="info">

        <ps-panel header="{l s='Help me' mod='medgtranslate'}">

            <ps-alert-hint>

                <p>{l s='I developed this module to allow the community to benefit from a free service and this for free.' mod='medgtranslate'}</p>
                <p>{l s='But without your help, I couldn\'t continue to offer free modules for long.' mod='medgtranslate'}</p>
                <p>{l s='So don\'t hesitate to make a very small gesture.' mod='medgtranslate'}</p>
                <p>{l s='No support is provided free of charge for this free module, but do not hesitate to contact me for any particular request concerning your shop.' mod='medgtranslate'}</p>

            </ps-alert-hint>

        </ps-panel>

        <ps-panel header="{l s='Donation' mod='medgtranslate'}">
            <p>

                <script type='text/javascript' src='https://ko-fi.com/widgets/widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('{l s='Buy me a' mod='medgtranslate'} Ko-fi', '#29abe0', 'H2H2F6EY');kofiwidget2.draw();</script>

            </p>

        </ps-panel>

        <ps-panel header="{l s='Donation' mod='medgtranslate'}">

                <a href="https://www.paypal.me/jeckyl/5" class="btn btn-mediacom87 btn-lg" target="_blank"><i class="{if $ps_version >= 1.6}icon icon-paypal{else}fa fa-paypal{/if}"></i> {l s='Donate € 5' mod='medgtranslate'}</a>

        </ps-panel>

        <ps-panel icon="icon-info" fa="info" header="{l s='Informations' mod='medgtranslate'}">

            {include file="$tpl_path/views/templates/admin/about.tpl"}

        </ps-panel>

        <ps-panel header="{l s='Partners' mod='medgtranslate'}">

            <iframe src="https://adsense.mediacom87.biz" width="728" height="90" marginheight="0" marginwidth="0" scrolling="no"></iframe>

        </ps-panel>


    </ps-tab>

    <ps-tab label="{l s='More Modules' mod='medgtranslate'}" id="tab25" icon="icon-cubes" fa="cubes">

        {include file="$tpl_path/views/templates/admin/modules.tpl"}

    </ps-tab>

    <ps-tab label="{l s='License' mod='medgtranslate'}" id="tab30" icon="icon-legal" fa="legal">

        {include file="$tpl_path/views/templates/admin/licence.tpl"}

    </ps-tab>

    <ps-tab label="Changelog" id="tab40" icon="icon-code" fa="code">

        {include file="$tpl_path/views/templates/admin/changelog.tpl"}

    </ps-tab>

</ps-tabs>

<script src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" async></script>