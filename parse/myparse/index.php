<?php
function is_post_request() {
  return $_SERVER['REQUEST_METHOD'] == 'POST';
}

if(is_post_request()) {
  include('main.php');
  include('simple_html_dom.php');
  include('simple_html_dom_node.php');
// Create DOM from URL or file
$html = file_get_html($_POST['url']);

// Find all images
foreach($html->find('img') as $element)
       echo $element->src . '<br>';

// Find all links
foreach($html->find('a') as $element)
       echo $element->href . '<br>';


} else {
?>

<!doctype html>
<head>
<title>My parser</title>
</head>
<body>

<h3>Parsed site:</h3>

<form action="index.php" method="post">
<input type="text" name="url" value="" /><br />
<br>
<input type="submit" name="submit" value="Start"  />
</form>

<?php
}


 ?>
</body>
