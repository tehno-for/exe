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
$svg_tech = '<svg viewBox="0 0 33 30" preserveAspectRatio="xMidYMin slice"><g xmlns="http://www.w3.org/2000/svg"> <g> <path d="M19.5,29.7h-6.1l-1.4-1.4h-12V7.9c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v18.9h11.1l1.4,1.4h4.8l1.4-1.4h11.1V7.9 c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v20.4h-12L19.5,29.7z"></path> </g> <g> <path d="M17.3,27h-2.5l-0.2-0.3c-0.3-0.4-1-1.1-2.1-1.1H2.8V5.1h3.5c0.4,0,0.8,0.3,0.8,0.8S6.7,6.6,6.3,6.6h-2v17.5h8.1 c1.5,0,2.5,0.8,3.1,1.4h0.3V9.9c0-0.8-0.2-3.3-3.3-3.3h-2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h2c2.9,0,4.8,1.9,4.8,4.8V27z"></path> </g> <g> <path d="M18.3,27h-2.6v-17c0-2.3,1.3-4.1,3.3-4.6c0.4-0.1,0.8,0.1,0.9,0.5c0.1,0.4-0.1,0.8-0.5,0.9c-2,0.6-2.2,2.4-2.2,3.2v15.5 h0.2c0.6-0.9,1.7-1.4,3.1-1.4h8.1V6.6h-1.3c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h2.8v20.5h-9.6c-1.4,0-1.8,0.5-2,1L18.3,27z"></path> </g> <g> <path d="M11.1,14l-2.8-1.9L5.6,14V3.7h5.6V14z M7.1,5.2v6l1.3-0.9l1.3,0.9v-6H7.1z"></path> </g> <g> <path d="M23.3,20.8c-1.5,0-2.8-1.3-2.8-2.8s1.3-2.8,2.8-2.8c1.5,0,2.8,1.3,2.8,2.8S24.8,20.8,23.3,20.8z M23.3,16.8 c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3S24,16.8,23.3,16.8z"></path> </g> <g> <path d="M23.3,14.1c-1.1,0-1.8-1-2.1-1.9c-0.2-0.7-0.7-6.8-0.7-9c0-1.6,1.2-2.9,2.8-2.9s2.8,1.3,2.8,2.9c0,2.1-0.5,8.2-0.7,9 C25.1,13,24.4,14.1,23.3,14.1z M23.3,1.8c-0.7,0-1.3,0.6-1.3,1.4c0,2.2,0.5,8,0.7,8.6c0.1,0.4,0.4,0.8,0.6,0.8s0.5-0.4,0.6-0.8 c0.1-0.5,0.7-6.4,0.7-8.6C24.6,2.4,24,1.8,23.3,1.8z"></path> </g> </g></svg>';
$svg_video = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"> <g><g><path d="M818.9,146.5H181.1C86.7,146.5,10,223.3,10,317.6v364.8c0,94.3,76.7,171.1,171.1,171.1h637.9c94.3,0,171.1-76.8,171.1-171.1V317.6C990,223.3,913.3,146.5,818.9,146.5z M919.9,682.4c0,55.7-45.3,101-100.9,101H181.1c-55.7,0-101-45.3-101-101V317.6c0-55.7,45.3-101,101-101h637.9c55.7,0,100.9,45.3,100.9,101L919.9,682.4L919.9,682.4z"/><path d="M688.2,470.7L428.3,299.4c-10.8-7.1-24.6-7.7-35.9-1.6c-11.4,6.1-18.4,18-18.4,30.9v342.6c0,12.9,7.1,24.7,18.4,30.9c5.2,2.8,10.9,4.2,16.6,4.2c6.7,0,13.5-1.9,19.3-5.8l259.9-171.3c9.8-6.5,15.8-17.5,15.8-29.3C703.9,488.2,698,477.2,688.2,470.7z M444.1,606.2V393.8L605.2,500L444.1,606.2z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g> </svg>';

// Test if connection succeeded
if(mysqli_connect_errno()) {
  $msg = "Database connection failed: ";
  $msg .= mysqli_connect_error();
  $msg .= " (" . mysqli_connect_errno() . ")";
  exit($msg);
}

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

//	for($i=605; $i<=1390; $i++) {
	for($i=1877; $i<=3174; $i++) {
	$subject = find_subjects_by_id($i,'asm_entity_detail_links');
	if(isset($subject['id'])){
	echo $subject["id"]." - ".$subject['entity_id']. "<br />";

		if($subject["name"]=='Texniki məlumatlar'||$subject["name"]=='Technical Data Sheet'||$subject["name"]=='Технические данные'){
			$sql = "UPDATE asm_entity_detail_links SET ";
			$sql.= "icon='" . 'is-useful-information' . "', ";
			$sql.= "svg='" . $svg_tech . "' ";
			$sql.= "WHERE id='" . $i ."';";
		} else {
			$sql = "UPDATE asm_entity_detail_links SET ";
			$sql.= "icon='" . 'is-safety-data-sheet' . "', ";
			$sql.= "svg='" . $svg_video . "', ";
			$sql.= "url='" . 'https://www.youtube.com/channel/UCQShkaciw9Zb1cjNcmmq1yw?view_as=subscriber' . "' ";
			$sql.= "WHERE id='" . $i ."';";
			
		}
//		 echo $sql."<br>";

		$result = mysqli_query($db, $sql); 
//		mysqli_free_result($result);
	}
}
// 3. Use returned data (if any)

// 4. Release returned data

// 5. Close database connection
mysqli_close($db);

?>
