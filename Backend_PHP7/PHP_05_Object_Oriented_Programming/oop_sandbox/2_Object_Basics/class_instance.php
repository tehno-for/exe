<?php

class Student {
	
}
$student1 = new Student;
$student2 = new Student;

echo get_class($student1)."<br>";

$class_names = ['Product', 'Student', 'student', 'SoapHeader', 'XSLTProcessor'];
foreach ($class_names as $class_name){
	if(is_a($student1, $class_name)){
		echo "\$student1 is {$class_name}.<br />";
	} else {
		echo "\$student1 is not {$class_name}.<br />";
	}
}

?>