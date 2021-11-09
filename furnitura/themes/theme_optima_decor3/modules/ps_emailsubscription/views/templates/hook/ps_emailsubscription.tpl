<div class="footer_block links">
	<div class="ft_newsletter">
		<div class="content_newsletter">

			<h3>
				{l s='Join Our Newsletter Now' d='Shop.Forms.Labels'}
			</h3>

			<div class="block_content">
				<p class="newletter-header">{l s='Enjoy our newsletter to stay updated with the latest news and special sales. Lets your email address here!' d='Shop.Forms.Labels'}</p>
				<form action="{$urls.pages.index}#footer" method="post">
					<div class="input-wrapper">
					  <input
						name="email"
						class="input_txt"
						type="text"
						value="{$value}"
						placeholder="{l s='Your email address' d='Shop.Forms.Labels'}"
					  >
					</div>
					<button class="btn btn-primary" name="submitNewsletter" type="submit" value=""><i class="pe-7s-mail-open"></i> <span>{l s='Subscribe' d='Shop.Theme.Actions'}</span></button>
					<input type="hidden" name="action" value="0">
				</form>

				<div class="col-xs-12">
				  {if $msg}
					<p class="alert {if $nw_error}alert-danger{else}alert-success{/if}">
					  {$msg}
					</p>
				  {/if}
				</div>
			</div>
		</div>
	</div>
</div>
