<?php

class Student {
	public $first_name;
	public $last_name ="Mashkov";
	public $contry = "None";

	protected $registration_id;
	private $tuition = 200.00;

	public function full_name(){
		return $this->first_name." ".$this->last_name;
	}

	public function hello_world(){
		return "Hello World!";
	}

	protected function hello_family(){
		return "Hello Family!";
	}

	private function hello_me(){
		return "Hello Me!";
			}

	public function tuition_fmt() {
		return '$'.$this->tuition;
}
}
class PartTimeStudent extends Student {
	public function hello_parent(){
		return $this->hello_family();
	}
}

$student1 = new Student;
$student1->first_name = 'Mammed';
$student1->last_name = 'Mammedov';

echo $student1->hello_world().'<br />';
// echo $student1->hello_family().'<br />';
// echo $student1->hello_me().'<br />';
// echo $student1->hello_parent().'<br />';

//$student1->tuition = 1000;
//echo $student1->tuition."<br />";

echo $student1->tuition_fmt().'<br>';
echo Student::hello_world();

?>
