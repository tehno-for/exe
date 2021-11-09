<?php
/* Smarty version 3.1.33, created on 2021-09-14 12:27:16
  from '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/layouts/layout-both-columns.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_61405ce4d178e3_36907570',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8aa680448daaff23063ab6d7e442bbdb9ac22a74' => 
    array (
      0 => '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/layouts/layout-both-columns.tpl',
      1 => 1575486187,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:_partials/head.tpl' => 1,
    'file:catalog/_partials/product-activation.tpl' => 1,
    'file:_partials/header.tpl' => 1,
    'file:_partials/notifications.tpl' => 1,
    'file:_partials/breadcrumb.tpl' => 1,
    'file:_partials/footer.tpl' => 1,
    'file:_partials/javascript.tpl' => 1,
  ),
),false)) {
function content_61405ce4d178e3_36907570 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_loadInheritance();
$_smarty_tpl->inheritance->init($_smarty_tpl, false);
?>
<!doctype html>
<html lang="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['language']->value['iso_code'], ENT_QUOTES, 'UTF-8');?>
">

  <head>
    <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_140524685761405ce4bc9046_31745523', 'head');
?>

  </head>

  <body id="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['page']->value['page_name'], ENT_QUOTES, 'UTF-8');?>
" class="<?php echo htmlspecialchars(call_user_func_array($_smarty_tpl->registered_plugins[ 'modifier' ][ 'classnames' ][ 0 ], array( $_smarty_tpl->tpl_vars['page']->value['body_classes'] )), ENT_QUOTES, 'UTF-8');?>
">

    <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_191405465261405ce4beef28_08244672', 'hook_after_body_opening_tag');
?>


    <main>
      <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_132397984561405ce4bfcaa9_62082476', 'product_activation');
?>


      <header id="header">
        <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_42744101861405ce4c0a4e7_04994381', 'header');
?>

      </header>
		<?php if ($_smarty_tpl->tpl_vars['page']->value['page_name'] == 'index') {?>
			<div class=" pos_bannerslide">
				<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayTopColumn'),$_smarty_tpl ) );?>

			</div>
		<?php }?>
      <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_124327009161405ce4c2cb50_53575920', 'notifications');
?>

       <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_161159587461405ce4c3a5e2_07505435', 'breadcrumb');
?>

      <section id="wrapper">
        <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>"displayWrapperTop"),$_smarty_tpl ) );?>

        
		<?php if ($_smarty_tpl->tpl_vars['page']->value['page_name'] == 'index') {?>
			<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayBlockPosition1'),$_smarty_tpl ) );?>

			<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayBlockPosition2'),$_smarty_tpl ) );?>

			<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayBlockPosition3'),$_smarty_tpl ) );?>

		<?php }?>
		<div class="container">	
			<div class="row">
			  <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_64803787261405ce4c6d8d5_09464201', "left_column");
?>


			  <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_110199177261405ce4c943d6_31981913', "content_wrapper");
?>


			  <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_187140202061405ce4cb77b5_79312097', "right_column");
?>

			</div>
        </div>
        <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>"displayWrapperBottom"),$_smarty_tpl ) );?>

		
      </section>

      <footer id="footer">
        <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_206198644761405ce4ce5003_15947259', "footer");
?>

      </footer>

    </main>

    <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_32829073561405ce4cf4a21_49448501', 'javascript_bottom');
?>


    <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_82031138661405ce4d09cf1_55681083', 'hook_before_body_closing_tag');
?>

	<div class="back-top"><a href= "#" class="back-top-button"></a></div>
  </body>

</html>
<?php }
/* {block 'head'} */
class Block_140524685761405ce4bc9046_31745523 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'head' => 
  array (
    0 => 'Block_140524685761405ce4bc9046_31745523',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

      <?php $_smarty_tpl->_subTemplateRender('file:_partials/head.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
    <?php
}
}
/* {/block 'head'} */
/* {block 'hook_after_body_opening_tag'} */
class Block_191405465261405ce4beef28_08244672 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'hook_after_body_opening_tag' => 
  array (
    0 => 'Block_191405465261405ce4beef28_08244672',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

      <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayAfterBodyOpeningTag'),$_smarty_tpl ) );?>

    <?php
}
}
/* {/block 'hook_after_body_opening_tag'} */
/* {block 'product_activation'} */
class Block_132397984561405ce4bfcaa9_62082476 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'product_activation' => 
  array (
    0 => 'Block_132397984561405ce4bfcaa9_62082476',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

        <?php $_smarty_tpl->_subTemplateRender('file:catalog/_partials/product-activation.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
      <?php
}
}
/* {/block 'product_activation'} */
/* {block 'header'} */
class Block_42744101861405ce4c0a4e7_04994381 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'header' => 
  array (
    0 => 'Block_42744101861405ce4c0a4e7_04994381',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

          <?php $_smarty_tpl->_subTemplateRender('file:_partials/header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
        <?php
}
}
/* {/block 'header'} */
/* {block 'notifications'} */
class Block_124327009161405ce4c2cb50_53575920 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'notifications' => 
  array (
    0 => 'Block_124327009161405ce4c2cb50_53575920',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

        <?php $_smarty_tpl->_subTemplateRender('file:_partials/notifications.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
      <?php
}
}
/* {/block 'notifications'} */
/* {block 'breadcrumb'} */
class Block_161159587461405ce4c3a5e2_07505435 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'breadcrumb' => 
  array (
    0 => 'Block_161159587461405ce4c3a5e2_07505435',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

		  	<div class="breadcrumb_container">
				<div class="container">
					<?php $_smarty_tpl->_subTemplateRender('file:_partials/breadcrumb.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
				</div>
			 </div> 
        <?php
}
}
/* {/block 'breadcrumb'} */
/* {block "left_column"} */
class Block_64803787261405ce4c6d8d5_09464201 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'left_column' => 
  array (
    0 => 'Block_64803787261405ce4c6d8d5_09464201',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

				<div id="left-column" class="col-xs-12 col-sm-4 col-md-3">
				  <?php if ($_smarty_tpl->tpl_vars['page']->value['page_name'] == 'product') {?>
					<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayLeftColumnProduct'),$_smarty_tpl ) );?>

				  <?php } else { ?>
					<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>"displayLeftColumn"),$_smarty_tpl ) );?>

				  <?php }?>
				</div>
			  <?php
}
}
/* {/block "left_column"} */
/* {block "content"} */
class Block_193218844961405ce4ca29e4_36088940 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

					<p>Hello world! This is HTML5 Boilerplate.</p>
				  <?php
}
}
/* {/block "content"} */
/* {block "content_wrapper"} */
class Block_110199177261405ce4c943d6_31981913 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'content_wrapper' => 
  array (
    0 => 'Block_110199177261405ce4c943d6_31981913',
  ),
  'content' => 
  array (
    0 => 'Block_193218844961405ce4ca29e4_36088940',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

				<div id="content-wrapper" class="left-column right-column col-sm-4 col-md-6">
				  <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>"displayContentWrapperTop"),$_smarty_tpl ) );?>

				  <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_193218844961405ce4ca29e4_36088940', "content", $this->tplIndex);
?>

				  <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>"displayContentWrapperBottom"),$_smarty_tpl ) );?>

				</div>
			  <?php
}
}
/* {/block "content_wrapper"} */
/* {block "right_column"} */
class Block_187140202061405ce4cb77b5_79312097 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'right_column' => 
  array (
    0 => 'Block_187140202061405ce4cb77b5_79312097',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

				<div id="right-column" class="col-xs-12 col-sm-4 col-md-3">
				  <?php if ($_smarty_tpl->tpl_vars['page']->value['page_name'] == 'product') {?>
					<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayRightColumnProduct'),$_smarty_tpl ) );?>

				  <?php } else { ?>
					<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>"displayRightColumn"),$_smarty_tpl ) );?>

				  <?php }?>
				</div>
			  <?php
}
}
/* {/block "right_column"} */
/* {block "footer"} */
class Block_206198644761405ce4ce5003_15947259 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'footer' => 
  array (
    0 => 'Block_206198644761405ce4ce5003_15947259',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

          <?php $_smarty_tpl->_subTemplateRender("file:_partials/footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
        <?php
}
}
/* {/block "footer"} */
/* {block 'javascript_bottom'} */
class Block_32829073561405ce4cf4a21_49448501 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'javascript_bottom' => 
  array (
    0 => 'Block_32829073561405ce4cf4a21_49448501',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

      <?php $_smarty_tpl->_subTemplateRender("file:_partials/javascript.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('javascript'=>$_smarty_tpl->tpl_vars['javascript']->value['bottom']), 0, false);
?>
    <?php
}
}
/* {/block 'javascript_bottom'} */
/* {block 'hook_before_body_closing_tag'} */
class Block_82031138661405ce4d09cf1_55681083 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'hook_before_body_closing_tag' => 
  array (
    0 => 'Block_82031138661405ce4d09cf1_55681083',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

      <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayBeforeBodyClosingTag'),$_smarty_tpl ) );?>

    <?php
}
}
/* {/block 'hook_before_body_closing_tag'} */
}
