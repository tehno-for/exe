<?php
/* Smarty version 3.1.33, created on 2021-09-14 00:04:14
  from '/var/www/clients/client1/web2/web/admin573dz2fdq/themes/new-theme/template/components/layout/warning_messages.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_613faebe043470_55524970',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3b7563dd21937c9bf506c88e5a66a42d522c5af1' => 
    array (
      0 => '/var/www/clients/client1/web2/web/admin573dz2fdq/themes/new-theme/template/components/layout/warning_messages.tpl',
      1 => 1575486166,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_613faebe043470_55524970 (Smarty_Internal_Template $_smarty_tpl) {
if (count($_smarty_tpl->tpl_vars['warnings']->value)) {?>
  <div class="bootstrap">
    <div class="alert alert-warning">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <?php if (count($_smarty_tpl->tpl_vars['warnings']->value) > 1) {?>
        <h4><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['l'][0], array( array('s'=>'There are %d warnings:','sprintf'=>array(count($_smarty_tpl->tpl_vars['warnings']->value))),$_smarty_tpl ) );?>
</h4>
      <?php }?>
      <ul class="list-unstyled">
        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['warnings']->value, 'warning');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['warning']->value) {
?>
          <li><?php echo $_smarty_tpl->tpl_vars['warning']->value;?>
</li>
        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
      </ul>
    </div>
  </div>
<?php }
}
}
