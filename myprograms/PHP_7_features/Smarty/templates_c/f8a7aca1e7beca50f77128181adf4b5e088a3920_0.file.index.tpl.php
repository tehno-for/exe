<?php
/* Smarty version 3.1.38, created on 2021-03-12 13:21:41
  from 'C:\OSPanel\domains\mysite\PHP_7_features\Smarty\templates\index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.38',
  'unifunc' => 'content_604b40b5697285_68575119',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'f8a7aca1e7beca50f77128181adf4b5e088a3920' => 
    array (
      0 => 'C:\\OSPanel\\domains\\mysite\\PHP_7_features\\Smarty\\templates\\index.tpl',
      1 => 1615544497,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_604b40b5697285_68575119 (Smarty_Internal_Template $_smarty_tpl) {
?><html>
    <head>
        <title>Info</title>
    </head>
    <body>
      <pre>
       Hello Geeksforgeeks
       Name: <?php echo $_smarty_tpl->tpl_vars['name']->value;?>

       Address: <?php echo $_smarty_tpl->tpl_vars['address']->value;?>

       Number: <?php echo $_smarty_tpl->tpl_vars['number']->value;?>

      </pre>
    </body>
</html>
<?php }
}
