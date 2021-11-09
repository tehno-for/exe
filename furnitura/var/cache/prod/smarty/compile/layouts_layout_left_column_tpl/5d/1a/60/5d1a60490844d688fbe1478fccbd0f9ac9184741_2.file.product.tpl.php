<?php
/* Smarty version 3.1.33, created on 2021-09-14 12:28:01
  from '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/catalog/_partials/miniatures/product.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_61405d11c129a0_42782453',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5d1a60490844d688fbe1478fccbd0f9ac9184741' => 
    array (
      0 => '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/catalog/_partials/miniatures/product.tpl',
      1 => 1615545955,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:catalog/_partials/customize/button-cart.tpl' => 1,
    'file:catalog/_partials/variant-links.tpl' => 1,
  ),
),false)) {
function content_61405d11c129a0_42782453 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_loadInheritance();
$_smarty_tpl->inheritance->init($_smarty_tpl, false);
?>
<article class="js-product-miniature" data-id-product="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['id_product'], ENT_QUOTES, 'UTF-8');?>
" data-id-product-attribute="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['id_product_attribute'], ENT_QUOTES, 'UTF-8');?>
" itemscope itemtype="https://schema.org/Product">
	<div class="img_block">
		<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_213344629261405d11a19a85_58277873', 'product_thumbnail');
?>

		<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_45430187361405d11aa6ce4_15143570', 'product_flags');
?>


		<div class="quick_view">
			<a href="#" class="quick-view" data-link-action="quickview" title="<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['l'][0], array( array('s'=>'Quick view','d'=>'Shop.Theme.Actions'),$_smarty_tpl ) );?>
"><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['l'][0], array( array('s'=>'Quick view','d'=>'Shop.Theme.Actions'),$_smarty_tpl ) );?>
</a>
		</div>
	</div>
    <div class="product_desc">
		<div class="desc_info">
			<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_99389640561405d11b09eb3_89885275', 'product_name');
?>

			<div class="hover">
				<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_197172941861405d11b33336_51762621', 'product_reviews');
?>

				<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_106319568161405d11b43e83_86435599', 'product_price_and_shipping');
?>

				<div class="add-to-links">
					<?php $_smarty_tpl->_subTemplateRender('file:catalog/_partials/customize/button-cart.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('product'=>$_smarty_tpl->tpl_vars['product']->value), 0, false);
?>
				</div>
			</div>
			<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_179844771761405d11be0272_84481636', 'product_description_short');
?>

			<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_1555033661405d11bf27a7_48948800', 'product_variants');
?>

		</div>

    </div>
</article>
<?php }
/* {block 'product_thumbnail'} */
class Block_213344629261405d11a19a85_58277873 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'product_thumbnail' => 
  array (
    0 => 'Block_213344629261405d11a19a85_58277873',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

			<a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['url'], ENT_QUOTES, 'UTF-8');?>
" class="thumbnail product-thumbnail">
			  <img
				src = "<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['cover']['bySize']['home_default']['url'], ENT_QUOTES, 'UTF-8');?>
"
				alt = "<?php if (!empty($_smarty_tpl->tpl_vars['product']->value['cover']['legend'])) {
echo htmlspecialchars($_smarty_tpl->tpl_vars['image']->value['legend'], ENT_QUOTES, 'UTF-8');
} else {
echo htmlspecialchars(call_user_func_array($_smarty_tpl->registered_plugins[ 'modifier' ][ 'truncate' ][ 0 ], array( $_smarty_tpl->tpl_vars['product']->value['name'],30,'...' )), ENT_QUOTES, 'UTF-8');
}?> - furnitura.az"
				title = "<?php if (!empty($_smarty_tpl->tpl_vars['product']->value['cover']['legend'])) {
echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['cover']['legend'], ENT_QUOTES, 'UTF-8');
} else {
echo htmlspecialchars(call_user_func_array($_smarty_tpl->registered_plugins[ 'modifier' ][ 'truncate' ][ 0 ], array( $_smarty_tpl->tpl_vars['product']->value['name'],30,'...' )), ENT_QUOTES, 'UTF-8');
}?>"
				data-full-size-image-url = "<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['cover']['large']['url'], ENT_QUOTES, 'UTF-8');?>
"
			  >
			  <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>"rotatorImg",'product'=>$_smarty_tpl->tpl_vars['product']->value),$_smarty_tpl ) );?>

			</a>
		  <?php
}
}
/* {/block 'product_thumbnail'} */
/* {block 'product_flags'} */
class Block_45430187361405d11aa6ce4_15143570 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'product_flags' => 
  array (
    0 => 'Block_45430187361405d11aa6ce4_15143570',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

			<ul class="product-flag">
				<?php if ($_smarty_tpl->tpl_vars['product']->value['show_price']) {?>
				   <?php if ($_smarty_tpl->tpl_vars['product']->value['has_discount']) {?>
					   <?php if ($_smarty_tpl->tpl_vars['product']->value['discount_type'] === 'percentage') {?>
						  <li class="discount-percentage"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['discount_percentage'], ENT_QUOTES, 'UTF-8');?>
</li>
						<?php }?>
					<?php }?>
				<?php }?>
				<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['product']->value['flags'], 'flag');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['flag']->value) {
?>
					<li class=" <?php echo htmlspecialchars($_smarty_tpl->tpl_vars['flag']->value['type'], ENT_QUOTES, 'UTF-8');?>
"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['flag']->value['label'], ENT_QUOTES, 'UTF-8');?>
</li>
				<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
			</ul>
		 <?php
}
}
/* {/block 'product_flags'} */
/* {block 'product_name'} */
class Block_99389640561405d11b09eb3_89885275 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'product_name' => 
  array (
    0 => 'Block_99389640561405d11b09eb3_89885275',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

				<h4><a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['url'], ENT_QUOTES, 'UTF-8');?>
" title="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['name'], ENT_QUOTES, 'UTF-8');?>
" itemprop="name" class="product_name"><?php echo htmlspecialchars(call_user_func_array($_smarty_tpl->registered_plugins[ 'modifier' ][ 'truncate' ][ 0 ], array( $_smarty_tpl->tpl_vars['product']->value['name'],30,'...' )), ENT_QUOTES, 'UTF-8');?>
</a></h4>
			<?php
}
}
/* {/block 'product_name'} */
/* {block 'product_reviews'} */
class Block_197172941861405d11b33336_51762621 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'product_reviews' => 
  array (
    0 => 'Block_197172941861405d11b33336_51762621',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

					<div class="hook-reviews">
						<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayProductListReviews','product'=>$_smarty_tpl->tpl_vars['product']->value),$_smarty_tpl ) );?>

					</div>
				<?php
}
}
/* {/block 'product_reviews'} */
/* {block 'product_price_and_shipping'} */
class Block_106319568161405d11b43e83_86435599 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'product_price_and_shipping' => 
  array (
    0 => 'Block_106319568161405d11b43e83_86435599',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

				  <?php if ($_smarty_tpl->tpl_vars['product']->value['show_price']) {?>
					<div class="product-price-and-shipping">
					   <span itemprop="price" class="price <?php if ($_smarty_tpl->tpl_vars['product']->value['has_discount']) {?> price_sale <?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['price'], ENT_QUOTES, 'UTF-8');?>
</span>
					  <?php if ($_smarty_tpl->tpl_vars['product']->value['has_discount']) {?>
						<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayProductPriceBlock','product'=>$_smarty_tpl->tpl_vars['product']->value,'type'=>"old_price"),$_smarty_tpl ) );?>


						<span class="sr-only"><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['l'][0], array( array('s'=>'Regular price','d'=>'Shop.Theme.Catalog'),$_smarty_tpl ) );?>
</span>
						<span class="regular-price"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['regular_price'], ENT_QUOTES, 'UTF-8');?>
</span>
						<?php if ($_smarty_tpl->tpl_vars['product']->value['discount_type'] === 'percentage') {?>
						  <span class="discount-percentage"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['product']->value['discount_percentage'], ENT_QUOTES, 'UTF-8');?>
</span>
						<?php }?>
					  <?php }?>

					  <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayProductPriceBlock','product'=>$_smarty_tpl->tpl_vars['product']->value,'type'=>"before_price"),$_smarty_tpl ) );?>


					  <span class="sr-only"><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['l'][0], array( array('s'=>'Price','d'=>'Shop.Theme.Catalog'),$_smarty_tpl ) );?>
</span>


					  <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayProductPriceBlock','product'=>$_smarty_tpl->tpl_vars['product']->value,'type'=>'unit_price'),$_smarty_tpl ) );?>


					  <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayProductPriceBlock','product'=>$_smarty_tpl->tpl_vars['product']->value,'type'=>'weight'),$_smarty_tpl ) );?>

					</div>
				  <?php }?>
				<?php
}
}
/* {/block 'product_price_and_shipping'} */
/* {block 'product_description_short'} */
class Block_179844771761405d11be0272_84481636 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'product_description_short' => 
  array (
    0 => 'Block_179844771761405d11be0272_84481636',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

				<div class="product-desc" itemprop="description"><?php echo $_smarty_tpl->tpl_vars['product']->value['description_short'];?>
</div>
			<?php
}
}
/* {/block 'product_description_short'} */
/* {block 'product_variants'} */
class Block_1555033661405d11bf27a7_48948800 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'product_variants' => 
  array (
    0 => 'Block_1555033661405d11bf27a7_48948800',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

				<?php if ($_smarty_tpl->tpl_vars['product']->value['main_variants']) {?>
				  <?php $_smarty_tpl->_subTemplateRender('file:catalog/_partials/variant-links.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('variants'=>$_smarty_tpl->tpl_vars['product']->value['main_variants']), 0, false);
?>
				<?php }?>
			<?php
}
}
/* {/block 'product_variants'} */
}
