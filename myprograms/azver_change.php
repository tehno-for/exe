<?php

// This guide demonstrates the five fundamental steps of database interaction using PHP.

// Credentials
$dbhost = 'localhost';
$dbuser = 'c3opet';
$dbpass = 'jx3_4hABU';
$dbname = 'c3opet_test';

$row = 'asm_entity_details';

//Extra functions
//require_once('query_function.php');
function confirm_result_set($result_set) {
	// Test if query succeeded (test function)
	if (!$result_set) {
	exit("Database query failed.");
	}
}

// 1. Create a database connection
$db = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Test if connection succeeded
if(mysqli_connect_errno()) {
  $msg = "Database connection failed: ";
  $msg .= mysqli_connect_error();
  $msg .= " (" . mysqli_connect_errno() . ")";
  exit($msg);
}

function find_row_by_id($id, $row){
	global $db; 
	$sql = "SELECT * FROM ".$row." ";
	$sql.="WHERE id= '".$id."'";
	$result = mysqli_query($db,$sql);
	confirm_result_set($result);
	$subject = mysqli_fetch_assoc($result);
	mysqli_free_result($result);
	return $subject; // return an 
}
for($i=1; $i<=3000; $i++) {

	$subject = find_row_by_id($i, $row);
	if(isset($subject['id'])){
		if($subject["lang"]=='az'){
			$subject["body"] = str_replace("Dollar kursuna  görə bütün qiymətlərə yenidən baxıla bilər", "Məhsulun dəyəri dolların günlük məzənnəsinə görə dəyişir", $subject["body"]);
		}
	$sql = "UPDATE ".$row." SET ";
	$sql.= "body='" . $subject["body"] . "' ";
	$sql.= "WHERE id='" . $subject['id'] ."' ";
	$sql.= "LIMIT 1";
	$result = mysqli_query($db, $sql);
		// For UPDATE statments, $result is true/false
	}
//	echo $sql."<br>";
}

// 4. Release returned data


// 5. Close database connection
mysqli_close($db);

?>