<?php
class Bycicle {
	var $brand;
	var $model;
	var $year;
	var $description = "kg";
	var $weight_kg;
	
	function name(){
		return "This bycicle by ".$this->brand." model producted in ".$this->model." ".$this->year." year. ";
		}
	function weight(){
		if($this->description =='pound'){
			$w = $this->weight_kg*2.046;
			return "It is weight is ".$w." pound. ";
		} else {
			return "It is weight is ".$this->weight_kg." kg. ";
		}
	}
} 

$cobra = new Bycicle;
$cobra->brand = "Cobra";
$cobra->model = "F1";
$cobra->year = "2015";
$cobra->description = 'kg';
$cobra->weight_kg = 17.5;

$igle = new Bycicle;
$igle->brand = "Igle";
$igle->model = "bitte";
$igle->description = 'pound';
$igle->year = "2013";
$igle->weight_kg = 16;

echo $cobra->name().$cobra->weight()."<br>";
echo $igle->name().$igle->weight()."<br>";

?>