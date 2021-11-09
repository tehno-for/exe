<?php
/* Smarty version 3.1.33, created on 2021-09-14 12:28:00
  from '/var/www/clients/client1/web2/web/modules/posstaticblocks/block.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_61405d10e82950_13040583',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'bffc56e53a46b256fb91f94a66b392a0fe30e824' => 
    array (
      0 => '/var/www/clients/client1/web2/web/modules/posstaticblocks/block.tpl',
      1 => 1575315737,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_61405d10e82950_13040583 (Smarty_Internal_Template $_smarty_tpl) {
?>
     <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['staticblocks']->value, 'block', false, 'key');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['block']->value) {
?>
	  <?php if ($_smarty_tpl->tpl_vars['block']->value['active'] == 1) {?>
		  <p class ="title_block"> <?php ob_start();
echo $_smarty_tpl->tpl_vars['block']->value['title'];
$_prefixVariable1 = ob_get_clean();
echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['l'][0], array( array('s'=>$_prefixVariable1),$_smarty_tpl ) );?>
 </p>
		
	  <?php }?>
	  <?php echo $_smarty_tpl->tpl_vars['block']->value['description'];?>

	  <?php if ($_smarty_tpl->tpl_vars['block']->value['insert_module'] == 1) {?>
		<?php echo $_smarty_tpl->tpl_vars['block']->value['block_module'];?>

	   <?php }?>
     <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}
}
