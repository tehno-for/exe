{**
 * 2007-2018 PrestaShop
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
 *}
<div class="bootstrap">
	<div class="col-lg-2">
		<img src="{$image}" alt="{$displayName}" class="img-thumbnail" />
		{if isset($badges)}
			{foreach $badges as $badge}
				{if is_array($badge)}
					{foreach $badge as $_badge}
						<img src="{$_badge}" alt="" class="clearfix quickview-badge" />
					{/foreach}
				{else}
					<img src="{$badge}" alt="" class="clearfix quickview-badge" />
				{/if}
			{/foreach}
		{/if}
	</div>
	<div class="col-lg-10">
		<h1>{$displayName}</h1>
		<div class="row">
			<div class="col-sm-6">
				{if (int)$nb_rates > 0}
				<span class="rating">
					<span class="star{if $avg_rate == 5} active{/if}"></span>
					<span class="star{if $avg_rate == 4} active{/if}"></span>
					<span class="star{if $avg_rate == 3} active{/if}"></span>
					<span class="star{if $avg_rate == 2} active{/if}"></span>
					<span class="star{if $avg_rate == 1} active{/if}"></span>
				</span>
				<p class="small">{if (int)$nb_rates > 1}{l s="(%s votes)" sprintf=[$nb_rates]}{else}{l s="(%s vote)" sprintf=[$nb_rates]}{/if}</p>
			{/if}
			</div>
			<div class="col-sm-6">
				{if (int)$price}
					<div class="quickview-price">
						{displayPrice price=$price currency=$id_currency}
					</div>
				{/if}
			</div>
		</div>
		<hr />
		<h3>{l s="Description"}</h3>
		<p class="text-justify">{$description_full}</p>
		{if isset($additional_description) && trim($additional_description) != ''}
			<hr />
			<h3>{l s="Merchant benefits"}</h3>
			<p class="text-justify">{$additional_description}</p>
		{/if}
		<hr />
		{if $installed}
			<div class="btn-group-action pull-right">
				{if $options|count > 0}
				<div class="btn-group">
					{assign var=option value=$options[0]}
					{$option}
					{if $options|count > 1}
					<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" >
						<span class="caret">&nbsp;</span>
					</button>
					<ul class="dropdown-menu pull-right">

					{foreach $options key=key item=option}
						{if $key != 0}
							{if strpos($option, 'title="divider"') !== false}
								<li class="divider"></li>
							{else}
								<li>{$option}</li>
							{/if}
						{/if}
					{/foreach}
					</ul>
					{/if}
				</div>
				{/if}
			</div>
		{elseif $is_addons_partner}
			<a class="btn btn-success btn-lg pull-right" href="{$url}">{l s='Install module'}</a>
		{else}
			<a class="btn btn-success btn-lg pull-right" href="{$url}" onclick="return !window.open(this.href, '_blank');">{l s='View on PrestaShop Addons'}</a>
		{/if}
	</div>
</div>
