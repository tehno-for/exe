<?php

class Student {
	var $first_name;
	var $last_name ="Mashkov";
	var $contry = "None";
	
	function say_hello(){
		return "Hello world!";
	}
	
	function full_name(){
		return $this->first_name." ".$this->last_name;
	}
}

$student1 = new Student;
$student1->first_name = 'Mammed';
$student1->last_name = 'Mammedov';

$student2 = new Student;
$student2->first_name = 'Fazil';

echo $student1->full_name()."<br>";
echo $student2->full_name()."<br>";

echo $student1->say_hello().'<br />';
echo $student2->say_hello().'<br>';

$class_methods = get_class_methods(Student);
echo "Class method:".implode(' ,',$class_methods)."<br>";

if(method_exists('Student', 'say_hello')){
	echo "Method say_hello is exist in Student class.<br>";
} else {
	echo "Method say_hello is not exist in Student class.<br>";
}

echo $student1->full_name()."<br>";
echo $student2->full_name()."<br>";

?>