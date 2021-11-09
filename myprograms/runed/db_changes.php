<?php

// This guide demonstrates the five fundamental steps
// of database interaction using PHP.

// Credentials
$dbhost = 'localhost';
$dbuser = 'furn';
$dbpass = '123456';
$dbname = 'opetlubricants';

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

function find_subjects_by_id($id){
	global $db; 
	$sql = "SELECT * FROM asm_entity_details ";
	$sql.="WHERE id= '".$id."'";
	$result = mysqli_query($db,$sql);
	confirm_result_set($result);
	$subject = mysqli_fetch_assoc($result);
	mysqli_free_result($result);
	return $subject; // return an 
}
for($i=1507; $i<=1756; $i++) {

	$subject = find_subjects_by_id($i);
	if(isset($subject['id'])){

	
	$subject["body"].='<p style="color:red">';
	if($subject["lang"] =='ru'){
		$subject["body"].='Все цены могут быть пересмотрены в случае резкого изменения курса доллара.';
	}elseif($subject["lang"]=='az'){
		$subject["body"].='Dollar kursuna  görə bütün qiymətlərə yenidən baxıla bilər.';
	}else{
		$subject["body"].='All prices may be revised in the event of a sharp change in the dollar.';
	}
	$subject["body"].='</p>';
	



	$sql = "UPDATE asm_entity_details SET ";
	$sql.= "body='" . $subject['body'] . "' ";
	$sql.= "WHERE id='" . $subject['id'] ."' ";
	$sql.= "LIMIT 1";
  
	$result = mysqli_query($db, $sql);
	// For UPDATE statments, $result is true/false
/*	if($result) {
		return true;
	} else {
		//If update fail
		echo mysqli_error($db);
		exit;
	}
	echo $sql;
*/

}

// 3. Use returned data (if any)
//while($subject = mysqli_fetch_assoc($result_set)) {
//	if ($subject["lang"]=='ru') {
//		echo $subject["id"]." - ".$subject["title"] .$subject["body"]. "<br />";
//	}
  }

// 4. Release returned data
# mysqli_free_result($result_set);

// 5. Close database connection
mysqli_close($db);

?>
