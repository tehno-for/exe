<?php

class Student {
	
}

$classes = get_declared_classes();

echo "Classes: ".implode('<br> ' ,$classes).'<hr />';

$class_names = ['Product', 'Student', 'student', 'SoapHeader', 'XSLTProcessor', 'SoapServer'];
foreach ($class_names as $choose){ //first name of array, second is array argument (or key and value)
	if(class_exists($choose)){
		echo "{$choose} is a declared class.<br>";
	} else {
		echo "{$choose} is a not declared class.<br>";
	}
}

?>