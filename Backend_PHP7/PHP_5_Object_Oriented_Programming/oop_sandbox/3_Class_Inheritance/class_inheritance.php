<?php

class User {

  var $is_admin = false;
  var $first_name;
  var $last_name;
  var $username;

  function full_name() {
    return $this->first_name . " " . $this->last_name;
  }

}

class Customer extends User {
	var $city;
	var $state; //or province
	var $country;
	
	function location(){
		return $this->city.' '.$this->state.' '.$this->country;
	}
}

class AdminAccess extends User {
	var $is_admin = true;
	function full_name() {
		return $this->first_name . " " . $this->last_name.' (Admin)';
  }
}
class SuperAdmin extends AdminAccess {
	
}

$u = new User;
$u->first_name = 'Mammed';
$u->last_name = 'Ahemedov';
$u->username = 'mahmedov';

$c = new Customer;
$c->first_name = 'Jale';
$c->last_name = 'Tagiyeva';
$c->username = 'jtagiyeva';
$c->city = 'Baku';
$c->state = 'Apsheron';
$c->country = 'Azerbaijan';
$c->test = 'Test';

$a = new AdminAccess;
$a->first_name = 'Jale';
$a->last_name = 'Tagiyeva';
$a->username = 'jtagiyeva';
$a->city = 'Baku';
$a->state = 'Apsheron';
$a->country = 'Azerbaijan';

$s = new SuperAdmin;

echo $u->full_name().'<br>';
echo $c->full_name().'<br>';
echo $a->full_name().'<br>';
echo $c->test.'<br>';


echo $c->location();
//echo $u->location();

echo get_parent_class($u).'<br>';
echo get_parent_class($c).'<br>';

if(is_subclass_of($c,'User')){
	echo "\$c is subclass of User".'<br>';
}

$parents = class_parents($s);
echo implode(', ',$parents);

?>
