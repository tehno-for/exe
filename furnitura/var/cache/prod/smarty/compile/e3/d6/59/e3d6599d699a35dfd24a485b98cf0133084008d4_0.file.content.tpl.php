<?php
/* Smarty version 3.1.33, created on 2021-09-14 00:03:26
  from '/var/www/clients/client1/web2/web/admin573dz2fdq/themes/default/template/content.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_613fae8e236980_27480431',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e3d6599d699a35dfd24a485b98cf0133084008d4' => 
    array (
      0 => '/var/www/clients/client1/web2/web/admin573dz2fdq/themes/default/template/content.tpl',
      1 => 1575486166,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_613fae8e236980_27480431 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="ajax_confirmation" class="alert alert-success hide"></div>
<div id="ajaxBox" style="display:none"></div>


<div class="row">
	<div class="col-lg-12">
		<?php if (isset($_smarty_tpl->tpl_vars['content']->value)) {?>
			<?php echo $_smarty_tpl->tpl_vars['content']->value;?>

		<?php }?>
	</div>
</div>
<?php }
}
