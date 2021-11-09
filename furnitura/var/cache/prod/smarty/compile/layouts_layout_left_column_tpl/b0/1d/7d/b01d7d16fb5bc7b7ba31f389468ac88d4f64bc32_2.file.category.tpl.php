<?php
/* Smarty version 3.1.33, created on 2021-09-14 12:28:00
  from '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/catalog/listing/category.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_61405d107bf0a8_31136961',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b01d7d16fb5bc7b7ba31f389468ac88d4f64bc32' => 
    array (
      0 => '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/catalog/listing/category.tpl',
      1 => 1614594005,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_61405d107bf0a8_31136961 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_loadInheritance();
$_smarty_tpl->inheritance->init($_smarty_tpl, true);
?>


<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_124292360761405d1075a953_71675087', 'product_list_header');
?>

<?php $_smarty_tpl->inheritance->endChild($_smarty_tpl, 'catalog/listing/product-list.tpl');
}
/* {block 'product_list_header'} */
class Block_124292360761405d1075a953_71675087 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'product_list_header' => 
  array (
    0 => 'Block_124292360761405d1075a953_71675087',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

    <div class="block-category card card-block hidden-sm-down">
		<?php if ($_smarty_tpl->tpl_vars['category']->value['description']) {?>
		<div class="category-desc">
      <h1 class="h1"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['category']->value['name'], ENT_QUOTES, 'UTF-8');?>
</h1>
			<div id="category-description" class="text-muted"><?php echo $_smarty_tpl->tpl_vars['category']->value['description'];?>
</div>
		</div>

      <?php if ($_smarty_tpl->tpl_vars['category']->value['image']['large']['url']) {?>
        <div class="category-cover">
          <img src="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['category']->value['image']['large']['url'], ENT_QUOTES, 'UTF-8');?>
" alt="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['category']->value['image']['legend'], ENT_QUOTES, 'UTF-8');?>
">
        </div>
      <?php }?>

    <?php } else { ?>
      <h1 class="h1"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['category']->value['name'], ENT_QUOTES, 'UTF-8');?>
</h1>
    <?php }?>
    </div>
<?php
}
}
/* {/block 'product_list_header'} */
}
