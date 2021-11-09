<?php
/* Smarty version 3.1.33, created on 2021-09-14 12:27:17
  from '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/_partials/header.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_61405ce5079489_88210845',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '702993a3869872a78aad110c7c2a08f56c174c8d' => 
    array (
      0 => '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/_partials/header.tpl',
      1 => 1613551369,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_61405ce5079489_88210845 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_loadInheritance();
$_smarty_tpl->inheritance->init($_smarty_tpl, false);
?>


<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_17958498961405ce500aab2_76575727', 'header_nav');
?>

<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_153656326961405ce5022648_77544934', 'header_top');
?>

<?php }
/* {block 'header_nav'} */
class Block_17958498961405ce500aab2_76575727 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'header_nav' => 
  array (
    0 => 'Block_17958498961405ce500aab2_76575727',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

<nav class="header-nav">
	<div class="container">
		<div class="hidden-md-down">
			<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayNav'),$_smarty_tpl ) );?>

		</div>
		<div class="hidden-lg-up  mobile">
			<div class="row row-mobile">
				<div class="mobile-left col-mobile col-md-4 col-xs-4">
					<div class="float-xs-left" id="menu-icon">
						<i class="material-icons d-inline">&#xE5D2;</i>
					</div>
					<div id="mobile_top_menu_wrapper" class="row hidden-lg-up" style="display:none;">
						<div class="top-header-mobile">
							<div id="_mobile_static"></div>
						</div>
						<div id="_mobile_currency_selector"></div>
						<div id="_mobile_language_selector"></div>
						<div class="menu-close">
							<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['l'][0], array( array('s'=>'menu','d'=>'Shop.Theme.Global'),$_smarty_tpl ) );?>
 <i class="material-icons float-xs-right">arrow_back</i>
						</div>
						<div class="menu-tabs">
							<div class="js-top-menu-bottom">
								<div id="_mobile_megamenu"></div>

							</div>

						</div>
					 </div>
				</div>
				<div class="mobile-center col-mobile col-md-4 col-xs-4">
					<div id="_mobile_logo"></div>
				</div>
				<div class="mobile-right col-mobile col-md-4 col-xs-4">
					<div id="_mobile_user_info"></div>
					<div id="_mobile_cart_block"></div>
				</div>
			</div>
			<div id="_mobile_search_block"></div>
		</div>
	</div>
</nav>
<?php
}
}
/* {/block 'header_nav'} */
/* {block 'header_top'} */
class Block_153656326961405ce5022648_77544934 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'header_top' => 
  array (
    0 => 'Block_153656326961405ce5022648_77544934',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

    <div class="header-top hidden-md-down">
		<div class="container">
			<div class="row">
				<div class="col col col-md-3" id="_desktop_logo">
					<?php if ($_smarty_tpl->tpl_vars['page']->value['page_name'] == 'index') {?>
					<a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['urls']->value['base_url'], ENT_QUOTES, 'UTF-8');?>
">
					<img class="logo img-responsive" src="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['shop']->value['logo'], ENT_QUOTES, 'UTF-8');?>
" alt="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['shop']->value['name'], ENT_QUOTES, 'UTF-8');?>
">
					</a>
					<?php } else { ?>
					<a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['urls']->value['base_url'], ENT_QUOTES, 'UTF-8');?>
">
					<img class="logo img-responsive" src="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['shop']->value['logo'], ENT_QUOTES, 'UTF-8');?>
" alt="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['shop']->value['name'], ENT_QUOTES, 'UTF-8');?>
">
					</a>
					<?php }?>
				</div>
				<div class=" col col-md-9 col-sm-12 position-static display_top">
					<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayMegamenu'),$_smarty_tpl ) );?>

					<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayTop'),$_smarty_tpl ) );?>

				</div>

			</div>
		</div>

	</div>
  <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['hook'][0], array( array('h'=>'displayNavFullWidth'),$_smarty_tpl ) );?>

  
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <?php echo '<script'; ?>
 async src="https://www.googletagmanager.com/gtag/js?id=UA-84086704-2"><?php echo '</script'; ?>
>
  <?php echo '<script'; ?>
>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-84086704-2');
  <?php echo '</script'; ?>
>
  
<?php
}
}
/* {/block 'header_top'} */
}
