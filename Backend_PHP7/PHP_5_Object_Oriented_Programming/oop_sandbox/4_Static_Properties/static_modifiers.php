<?php

class Student {

  public static $grades = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
  private static $total_students = 0;

  public static function motto() {
    return "To learn PHP OOP!";
  }

  public static function count() {
    return self::$total_students;
  }

  public static function add_student() {
    self::$total_students++;
  }

}

echo Student::$grades[0]."<br>";
echo Student::motto()."<br>";

// echo Student::$total_students."<br>";  //error
echo Student::count()."<br>";
echo Student::add_student()."<br>";
echo Student::count()."<br><hr>";

//Static behaviour properties and method

class PartTimeStudent extends Student {
}
echo PartTimeStudent::$grades[0]."<br>";
echo PartTimeStudent::motto()."<br>";
PartTimeStudent::add_student();
Student::add_student();
Student::add_student();
echo Student::count()."<br>";
echo PartTimeStudent::count()."<br>";

PartTimeStudent::$grades[2] = "Alumin";
echo implode(', ',Student::$grades);


?>
