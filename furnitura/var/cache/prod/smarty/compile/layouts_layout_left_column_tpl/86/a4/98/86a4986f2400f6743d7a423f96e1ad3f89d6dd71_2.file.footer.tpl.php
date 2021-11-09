<?php
/* Smarty version 3.1.33, created on 2021-09-14 12:28:02
  from '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/_partials/footer.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_61405d127cb885_80584669',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '86a4986f2400f6743d7a423f96e1ad3f89d6dd71' => 
    array (
      0 => '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/_partials/footer.tpl',
      1 => 1575315739,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_61405d127cb885_80584669 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="footer-container">
	<div class="container">	
		<div class=" footer-middle">
			  <div class="row">	
					<div class="col-sm-12 col-md-12 col-lg-4 col-xs-12">
						<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayFooterBefore'),$_smarty_tpl ) );?>

					</div>
					<div class="col-sm-12 col-md-12 col-lg-4 col-xs-12">
						<div class="row">
						<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayFooter'),$_smarty_tpl ) );?>

						</div>
					</div>
					<div class="col-sm-12 col-md-12 col-lg-4 col-xs-12">
						<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayFooterAfter'),$_smarty_tpl ) );?>

					</div>
			  </div>
		</div>
	</div>
	<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayBlockFooter1'),$_smarty_tpl ) );?>

</div><?php }
}
