<?php
class Beverage {
  public $name;

  public function __construct(){
    echo "New Beverage created.<br />";
  }
  public function __clone(){
    echo "Existing Beverage was copied.<br />";
  }
}

$a = new Beverage;
$a->name = "coffee";
echo $a->name. "<br>";
echo "<hr>";

$b = clone $a;
echo $a->name."<br>";
echo $b->name."<br>";
echo "<hr>";

$b->name = "tea";
echo $a->name."<br>";
echo $b->name."<br>";
echo "<hr>";


$c = $a;
echo $a->name."<br>";
echo $b->name."<br>";
echo $c->name."<br>";
echo "<hr />";

$a->name = 'Tartalets';

echo $a->name."<br>";
echo $b->name."<br>";
echo $c->name."<br>";

?>
