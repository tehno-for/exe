<?php

class Bicycle {

  public static $instance_count = 0;

  public $brand;
  public $model;
  public $year;
  public $description = 'Used bicycle';
  public $weight_kg = 0.0;
  protected $wheels = 2;

  public function name() {
    return $this->brand . " " . $this->model . " (" . $this->year . ")";
  }

  public function weight_kg(){
    return $this->weight_kg . ' kg';
  }

  public function set_weight_kg($value){
    $this->weight_kg = floatval($value);
  }

  public function wheel_detail() {
    $wheel_string = $this->wheels == 1 ? "1 wheel" : "{$this->wheels} wheels";
    return "It has " . $wheel_string . "." ;
  }

  public function weight_lbs() {
    return floatval($this->weight_kg) * 2.2046226218;
  }

  public function set_weight_lbs($value) {
    $this->weight_kg = floatval($value) / 2.2046226218;
  }
  public static $instance_count = 1;
  public static function create(){
    static::$instance_count++;

  }

}
class Unicycle {
  protected $wheels = 1;
  public static $instance_count = 1;

}



$trek = new Bicycle;
$trek->brand = 'Trek';
$trek->model = 'Emonda';
$trek->year = '2017';
$trek->weight_kg = 1.0;

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
