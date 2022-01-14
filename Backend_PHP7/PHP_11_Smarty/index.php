<?php
include('smarty/libs/Smarty.class.php');

// create object
$smarty = new Smarty;

// assign some content. This would typically come from
// a database or other source, but we'll use static
$smarty->assign('name', 'Soumit Sarkar');
$smarty->assign('address', 'Kolkata');
$smarty->assign('number', 'first');

// display it
$smarty->display('templates/index.tpl');

?>
