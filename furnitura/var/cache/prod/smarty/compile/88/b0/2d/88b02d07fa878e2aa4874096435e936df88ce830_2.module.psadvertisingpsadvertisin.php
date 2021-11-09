<?php
/* Smarty version 3.1.33, created on 2021-09-14 12:28:01
  from 'module:psadvertisingpsadvertisin' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_61405d1184ad99_54478964',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '88b02d07fa878e2aa4874096435e936df88ce830' => 
    array (
      0 => 'module:psadvertisingpsadvertisin',
      1 => 1614599024,
      2 => 'module',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_61405d1184ad99_54478964 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="advertising">
	<a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['adv_link']->value, ENT_QUOTES, 'UTF-8');?>
" rel="nofollow" target=”_blank” title="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['adv_title']->value, ENT_QUOTES, 'UTF-8');?>
"><img src="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['image']->value, ENT_QUOTES, 'UTF-8');?>
" alt="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['adv_title']->value, ENT_QUOTES, 'UTF-8');?>
" title="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['adv_title']->value, ENT_QUOTES, 'UTF-8');?>
"/></a>
</div>
<?php }
}
