<?php

class Agreement {
	var $main_content = 'It is agreement about ...';
	var $agreement_number = '001';
	var $contractor_name = 'Uknown';
	var $customer_name = 'Uknown';
}

class Contractor extends Agreement {
	var $contractor_name = 'Uknown';
	function print_agreement(){
		return " {$this->$contractor_name} compiler with {$this->agreement_number}<br>between ".
		$this->contractor_name." and ".$this->customer_name."<br>".
		$this->main_content;
	}	
}

class Customer extends Agreement {
	var $customer_name = 'Uknown';
	function print_agreement(){
	return " {$this->customer_name} compiler with {$this->agreement_number}<br>between ".
	$this->contractor_name." and ".$this->customer_name."<br>".$this->main_content;
	}
}

$fc = new Customer;
// $fc->agreement_number = '002';
$fc->customer_name = 'Vahid Ahmedov';

echo $fc->print_agreement();
?>
