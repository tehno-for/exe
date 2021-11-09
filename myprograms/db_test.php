<?php

// This guide demonstrates the five fundamental steps
// of database interaction using PHP.

// Credentials
$dbhost = 'localhost';
$dbuser = 'furn';
$dbpass = '123456';
$dbname = 'opetlubricants';

// 1. Create a database connection
$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Test if connection succeeded
if(mysqli_connect_errno()) {
  $msg = "Database connection failed: ";
  $msg .= mysqli_connect_error();
  $msg .= " (" . mysqli_connect_errno() . ")";
  exit($msg);
}

// 2. Perform database query
$query = "SELECT * FROM asm_entity_detail_links";
$result_set = mysqli_query($connection, $query);

// 3. Use returned data (if any)
while($subject = mysqli_fetch_assoc($result_set)) {
	if($subject["name"]=='Texniki məlumatlar') {
		echo $subject["entity_id"]." - ".$subject["url"] . "<br />";
	}
  }

// 4. Release returned data
mysqli_free_result($result_set);

// 5. Close database connection
mysqli_close($connection);

?>
