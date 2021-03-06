<?php

// This guide demonstrates the five fundamental steps
// of database interaction using PHP.

// Credentials

$dbhost = 'localhost';
$dbuser = 'c3opet';
$dbpass = 'jx3_4hABU';
$dbname = 'c3opet_test';
/*
$dbhost = 'localhost';
$dbuser = 'furn';
$dbpass = '123456';
$dbname = 'opetlubricants';
*/
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
//	$i='605';
function find_subjects_by_id($id,$cn){
	global $db; 
	$sql = "SELECT * FROM ".$cn." ";
	$sql.="WHERE id= '".$id."'";
	$result = mysqli_query($db,$sql);
	confirm_result_set($result);
	$subject = mysqli_fetch_assoc($result);
	mysqli_free_result($result);
	return $subject; // return an 
}
//	$i = 607;
//	for($i=605; $i<=1390; $i++) {
	for($i=1507; $i<=1927; $i++) {
	$subject = find_subjects_by_id($i,'asm_entity_details');
	if(isset($subject['id'])){
//	echo $subject["id"]." - ".$subject["lang"]." - ".$subject['entity_id']." - ".$subject["title"] . "<br />";
	$sub= strtolower ($subject["title"]);
	echo $sub.'<br>';
	$sub = str_replace(" ", "_", $sub);
	$sub = str_replace("-", "_", $sub);
		if($subject["lang"]=='az'){
			$sub = "/assets/uploads/pdf/tbf_".$sub.".pdf";
			$sql = "UPDATE asm_entity_detail_links SET ";
			$sql.= "url='" . $sub . "' ";
			$sql.= "WHERE entity_id='" . $subject['entity_id'] ."' ";
			$sql.= "AND name='Texniki məlumatlar';";
		} else {
			$sub = "/assets/uploads/pdf/tds_".$sub.".pdf";
			$sql = "UPDATE asm_entity_detail_links SET ";
			$sql.= "url='" . $sub . "' ";
			$sql.= "WHERE entity_id='" . $subject['entity_id'] ."' ";
			$sql.= "AND (name='Технические данные' OR name='Technical Data Sheet'";
			$sql.= ");";
		}
//		echo $sql."<br>";
//		echo $sub."<br>";

// 		$result = mysqli_query($db, $sql); 
	}
}
// 3. Use returned data (if any)

// 4. Release returned data

// 5. Close database connection
mysqli_close($db);

?>
