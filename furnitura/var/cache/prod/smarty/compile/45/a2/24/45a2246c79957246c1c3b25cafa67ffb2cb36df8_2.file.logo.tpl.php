<?php
/* Smarty version 3.1.33, created on 2021-09-14 12:27:18
  from '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/modules/poslogo/logo.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_61405ce68889f3_54531086',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '45a2246c79957246c1c3b25cafa67ffb2cb36df8' => 
    array (
      0 => '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/modules/poslogo/logo.tpl',
      1 => 1614601579,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_61405ce68889f3_54531086 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="container">
<div class="pos_logo product_block_container">
	<div class="row pos_content">
		<div class="logo-slider owl-carousel">
				<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['logos']->value, 'logo', false, NULL, 'myLoop', array (
  'index' => true,
  'first' => true,
  'iteration' => true,
  'last' => true,
  'total' => true,
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['logo']->value) {
$_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['iteration']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['index']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['first'] = !$_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['index'];
$_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['last'] = $_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['iteration'] === $_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['total'];
?>
					<?php if ((isset($_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['index'] : null)%1 == 0 || (isset($_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['first']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['first'] : null)) {?>
					<div>
					<?php }?>
						<div class="item-banklogo">
							<a href ="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['logo']->value['link'], ENT_QUOTES, 'UTF-8');?>
">
								<img class="replace-2x img-responsive" src ="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['logo']->value['image'], ENT_QUOTES, 'UTF-8');?>
" alt ="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['logo']->value['title'], ENT_QUOTES, 'UTF-8');?>
 - furnitura" title="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['logo']->value['title'], ENT_QUOTES, 'UTF-8');?>
" />
							</a>
						</div>
					<?php if ((isset($_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['iteration']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['iteration'] : null)%1 == 0 || (isset($_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['last']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_myLoop']->value['last'] : null)) {?>
					</div>
					<?php }?>
				<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
		</div>
	</div>
</div>

</div>
<?php }
}
