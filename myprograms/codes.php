<?php

// This guide demonstrates the five fundamental steps
// of database interaction using PHP.

// Credentials
$dbhost = 'localhost';
$dbuser = 'furn';
$dbpass = '123456';
$dbname = 'opetlubricants';
$row = 'asm_entity_details';
// 1. Create a database connection
$db = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Test if connection succeeded
if(mysqli_connect_errno()) {
  $msg = "Database connection failed: ";
  $msg .= mysqli_connect_error();
  $msg .= " (" . mysqli_connect_errno() . ")";
  exit($msg);
}

// 2. Perform database query
function find_all_rows ($row){
	global $db;
	$sql = "SELECT * FROM ".$row." ";
	// $sql.="ORDER BY position ASC";
	// echo "$sql";
	$result=mysqli_query($db,$sql);
	# confirm_result_set($result);
	return $result;
}
// 3. Use returned data (if any)
$subject_set = find_all_rows($row);
var_dump ($subject_set);
$subject_count = mysqli_num_rows($subject_set);
mysqli_free_result($subject_set);
echo $subject_count;

// 4. Release returned data
# mysqli_free_result($result_set);

// 5. Close database connection
mysqli_close($db);

?>
