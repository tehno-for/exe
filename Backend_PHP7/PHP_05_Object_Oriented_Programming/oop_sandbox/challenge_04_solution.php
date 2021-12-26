<?php
class Bicycle {

  public static $instance_count = 0;

  public $brand;
  public $model;
  public $year;
  public $category;
  public $description = 'Used bicycle';
  public $weight_kg = 0.0;
  protected static $wheels = 2;

  public const CATEGORIES =['Roud','Mountain','Hibrid','Cruize', 'City', 'BMX'];

  public static function create(){
    $class_name = get_called_class();
    $obj = new $class_name;
    static::$instance_count++;
    return $obj;
   }

  public function name() {
    return $this->brand . " " . $this->model . " (" . $this->year . ")";
  }

  public function weight_kg(){
    return $this->weight_kg . ' kg';
  }

  public function set_weight_kg($value){
    $this->weight_kg = floatval($value);
  }

  public static function wheel_details() {
    $wheel_string = static::$wheels == 1 ? "1 wheel" : static::$wheels ." wheels";
    return "It has " . $wheel_string . "." ;
  }

  public function weight_lbs() {
    return floatval($this->weight_kg) * 2.2046226218;
  }

  public function set_weight_lbs($value) {
    $this->weight_kg = floatval($value) / 2.2046226218;
  }



}
class Unicycle extends Bicycle {
  protected static $wheels = 1;


  public function bug_test(){
    return $this->weight_kg;
  }

}



$trek = new Bicycle;
$trek->brand = 'Trek';
$trek->model = 'Emonda';
$trek->year = '2017';
$trek->weight_kg = 1.0;

echo 'Bicycle count: '. Bicycle::$instance_count . '<br>';
echo 'Unicycle count: '. Unicycle::$instance_count . '<br><hr />';

$bike = Bicycle::create();
$uni = Unicycle::create();

echo 'Bicycle count: '. Bicycle::$instance_count . '<br>';
echo 'Unicycle count: '. Unicycle::$instance_count . '<br><hr />';

echo "<hr />";
echo 'Categories: ' . implode(', ',Bicycle::CATEGORIES).'<br>';
$trek->category = Bicycle::CATEGORIES[0];
echo 'Categories: ' . $trek->category . '<br />';


echo "<hr />";
echo 'Bicycle has ' . Bicycle::wheel_details()."<br>";
echo 'Unicycle has '. Unicycle::wheel_details()."<br>";
echo "<hr />";

$cd = new Bicycle;
$cd->brand = 'Cannondale';
$cd->model = 'Synapse';
$cd->year = '2016';
$cd->weight_kg = 8.0;

echo $trek->name() . "<br />";
echo $cd->name() . "<br />";

echo $trek->weight_kg . "<br />";
echo $trek->weight_lbs() . "<br />";
// notice that one is property, one is a method

$trek->set_weight_lbs(2);
echo $trek->weight_kg . "<br />";
echo $trek->weight_lbs() . "<br />";



?>
