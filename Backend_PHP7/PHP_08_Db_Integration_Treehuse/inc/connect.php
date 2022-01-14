<?php

//echo "Hello world!!!<br>";
try {
  $db = new PDO("sqlite:".__DIR__."/database.db");
  // $db = new PDO("mysql:host=localhost;dbname=database;port=3306","admin","Tehno@q123Db");
  $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch (Exception $e){
  echo "Some issue: ".$e->getMessage();
  exit;
}

try {
  $results = $db->query("SELECT Title, Category, img FROM Media");
  // echo "Result is ok!";
} catch(Exception $e) {
  echo "Query is not taked!";
  exit;
}

$results->fetchAll(PDO::FETCH_ASSOC);
?>
