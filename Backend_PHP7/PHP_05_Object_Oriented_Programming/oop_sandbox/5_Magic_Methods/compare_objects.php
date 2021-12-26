<?php

class Box {
  public $name = 'box';
}
$box = new Box;

$box_reference = $box;
$box_clone = clone $box;

$box_modefied = clone $box;
$box_modefied->name = "change box";

$box_another = new Box;

echo 'Reference: '.($box == $box_reference ? 'T' : 'F').'<br>';
echo 'Clone: '.($box == $box_clone ? 'T' : 'F').'<br>';
echo 'Modefied: '.($box == $box_modefied ? 'T' : 'F').'<br>';
echo 'Another: '.($box == $box_another ? 'T' : 'F').'<br>';
echo "<hr />";

echo 'Reference: '.($box === $box_reference ? 'T' : 'F').'<br>';
echo 'Clone: '.($box === $box_clone ? 'T' : 'F').'<br>';
echo 'Modefied: '.($box === $box_modefied ? 'T' : 'F').'<br>';
echo 'Another: '.($box === $box_another ? 'T' : 'F').'<br>';

?>
