<?php
/* Smarty version 3.1.33, created on 2021-09-14 12:27:16
  from '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/page.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_61405ce4b4fcf8_25358749',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '749f9d5cc667571e8013d60d4780d488627cc046' => 
    array (
      0 => '/var/www/clients/client1/web2/web/themes/theme_optima_decor3/templates/page.tpl',
      1 => 1575486187,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_61405ce4b4fcf8_25358749 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_loadInheritance();
$_smarty_tpl->inheritance->init($_smarty_tpl, true);
?>


<?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_196618130161405ce4b09d50_18134797', 'content');
?>

<?php $_smarty_tpl->inheritance->endChild($_smarty_tpl, $_smarty_tpl->tpl_vars['layout']->value);
}
/* {block 'page_title'} */
class Block_37425375161405ce4b15a94_14515251 extends Smarty_Internal_Block
{
public $callsChild = 'true';
public $hide = 'true';
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

        <header class="page-header">
          <h1><?php 
$_smarty_tpl->inheritance->callChild($_smarty_tpl, $this);
?>
</h1>
        </header>
      <?php
}
}
/* {/block 'page_title'} */
/* {block 'page_header_container'} */
class Block_185868762561405ce4b0f0e6_31891333 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

      <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_37425375161405ce4b15a94_14515251', 'page_title', $this->tplIndex);
?>

    <?php
}
}
/* {/block 'page_header_container'} */
/* {block 'page_content_top'} */
class Block_64642400961405ce4b2b802_10607219 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
}
}
/* {/block 'page_content_top'} */
/* {block 'page_content'} */
class Block_166588144961405ce4b32db4_63555279 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

          <!-- Page content -->
        <?php
}
}
/* {/block 'page_content'} */
/* {block 'page_content_container'} */
class Block_7177104161405ce4b260a3_63387349 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

      <section id="content" class="page-content card card-block">
        <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_64642400961405ce4b2b802_10607219', 'page_content_top', $this->tplIndex);
?>

        <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_166588144961405ce4b32db4_63555279', 'page_content', $this->tplIndex);
?>

      </section>
    <?php
}
}
/* {/block 'page_content_container'} */
/* {block 'page_footer'} */
class Block_164663295761405ce4b43914_86551631 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

          <!-- Footer content -->
        <?php
}
}
/* {/block 'page_footer'} */
/* {block 'page_footer_container'} */
class Block_120385392561405ce4b3e622_12716466 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

      <footer class="page-footer">
        <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_164663295761405ce4b43914_86551631', 'page_footer', $this->tplIndex);
?>

      </footer>
    <?php
}
}
/* {/block 'page_footer_container'} */
/* {block 'content'} */
class Block_196618130161405ce4b09d50_18134797 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'content' => 
  array (
    0 => 'Block_196618130161405ce4b09d50_18134797',
  ),
  'page_header_container' => 
  array (
    0 => 'Block_185868762561405ce4b0f0e6_31891333',
  ),
  'page_title' => 
  array (
    0 => 'Block_37425375161405ce4b15a94_14515251',
  ),
  'page_content_container' => 
  array (
    0 => 'Block_7177104161405ce4b260a3_63387349',
  ),
  'page_content_top' => 
  array (
    0 => 'Block_64642400961405ce4b2b802_10607219',
  ),
  'page_content' => 
  array (
    0 => 'Block_166588144961405ce4b32db4_63555279',
  ),
  'page_footer_container' => 
  array (
    0 => 'Block_120385392561405ce4b3e622_12716466',
  ),
  'page_footer' => 
  array (
    0 => 'Block_164663295761405ce4b43914_86551631',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>


  <div id="main">

    <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_185868762561405ce4b0f0e6_31891333', 'page_header_container', $this->tplIndex);
?>


    <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_7177104161405ce4b260a3_63387349', 'page_content_container', $this->tplIndex);
?>


    <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_120385392561405ce4b3e622_12716466', 'page_footer_container', $this->tplIndex);
?>


  </div>

<?php
}
}
/* {/block 'content'} */
}
