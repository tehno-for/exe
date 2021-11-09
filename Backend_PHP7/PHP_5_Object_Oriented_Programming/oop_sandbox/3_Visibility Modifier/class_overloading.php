<?php

class Student {

	private $tuition = 200.00;


}

class PartTimeStudent extends Student {
	public $tuition = 100.00;
	}

$student1 = new Student;


echo $student1->tuition.'<br>';


?>
