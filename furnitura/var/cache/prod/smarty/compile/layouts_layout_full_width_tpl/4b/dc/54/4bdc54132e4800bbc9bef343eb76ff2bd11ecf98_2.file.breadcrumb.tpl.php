<?php
/* Smarty version 3.1.33, created on 2021-09-14 12:27:17
  from '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/_partials/breadcrumb.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_61405ce5ad3425_12142502',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '4bdc54132e4800bbc9bef343eb76ff2bd11ecf98' => 
    array (
      0 => '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/_partials/breadcrumb.tpl',
      1 => 1575486187,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_61405ce5ad3425_12142502 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_loadInheritance();
$_smarty_tpl->inheritance->init($_smarty_tpl, false);
?>
<nav data-depth="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['breadcrumb']->value['count'], ENT_QUOTES, 'UTF-8');?>
" class="breadcrumb hidden-sm-down">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['breadcrumb']->value['links'], 'path', false, NULL, 'breadcrumb', array (
  'iteration' => true,
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['path']->value) {
$_smarty_tpl->tpl_vars['__smarty_foreach_breadcrumb']->value['iteration']++;
?>
      <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_182172605861405ce5aaea35_01187352', 'breadcrumb_item');
?>

    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
  </ol>
</nav>
<?php }
/* {block 'breadcrumb_item'} */
class Block_182172605861405ce5aaea35_01187352 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'breadcrumb_item' => 
  array (
    0 => 'Block_182172605861405ce5aaea35_01187352',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a itemprop="item" href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['path']->value['url'], ENT_QUOTES, 'UTF-8');?>
">
            <span itemprop="name"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['path']->value['title'], ENT_QUOTES, 'UTF-8');?>
</span>
          </a>
          <meta itemprop="position" content="<?php echo htmlspecialchars((isset($_smarty_tpl->tpl_vars['__smarty_foreach_breadcrumb']->value['iteration']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_breadcrumb']->value['iteration'] : null), ENT_QUOTES, 'UTF-8');?>
">
        </li>
      <?php
}
}
/* {/block 'breadcrumb_item'} */
}
