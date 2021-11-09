<?php
/* Smarty version 3.1.38, created on 2021-03-30 14:30:54
  from '/var/www/clients/client2/web4/web/mysite/PHP_7_features/Smarty/templates/index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.38',
  'unifunc' => 'content_6063361e9be056_59128475',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'fdc8eb552426a8170d405dd957d073fea211e9a5' => 
    array (
      0 => '/var/www/clients/client2/web4/web/mysite/PHP_7_features/Smarty/templates/index.tpl',
      1 => 1617114465,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6063361e9be056_59128475 (Smarty_Internal_Template $_smarty_tpl) {
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
