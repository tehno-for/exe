<?php

class Bicycle {

  public $brand;
  public $model;
  public $year;
  public $description = 'Used bicycle';
  private $weight_kg = 0.0;
  protected $wheels = 2;

  public function name() {
    return $this->brand . " " . $this->model . " (" . $this->year . ")";
  }

  public function weight_lbs() {
    return floatval($this->weight_kg) * 2.2046226218. " pounds<";
  }

  public function set_weight_lbs($value) {
    $this->weight_kg = floatval($value) / 2.2046226218;
  }

  public function wheels_detail(){
    return "It has {$this->wheels} wheels.";
  }
  public function set_weight_kg($value){
    $this->weight_kg = floatval($value);
  }
  public function weight_kg(){
    return $this->weight_kg." kg";
  }
}

class Unisycle extends Bicycle {
  protected $wheels = 1;


}

$trek = new Bicycle;
$trek->brand = 'Trek';
$trek->model = 'Emonda';
$trek->year = '2017';
// $trek->weight_kg = 1.0;
$trek->set_weight_kg(1.0);

echo $trek->name() . "<br />";
echo $trek->weight_kg().'<br />';
echo $trek->weight_lbs() . "<br />";
// $trek->set_weight_lbs(2);

// echo $trek->weight_lbs() . "<br />";
echo $trek->wheels_detail()."<hr />";
/*
$cd = new Bicycle;
$cd->brand = 'Cannondale';
$cd->model = 'Synapse';
$cd->year = '2016';
// $cd->weight_kg = 8.0;
echo $cd->name() . "<br /><hr />";
*/
$uni = new Unisycle;
echo $uni->wheels_detail()."<br />";
$uni->set_weight_kg(0.9)."<br />";
echo $uni->weight_kg()."<br />";





// notice that one is property, one is a method



?>
