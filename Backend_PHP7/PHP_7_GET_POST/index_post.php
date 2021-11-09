<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>POST Superglobals</title>
</head>

<body>
  <form method="post" action="index_post.php">
    <input type="text" name="name">
    <input type="text" name="lang">
    <input type="submit" value="submit">
  </form>

 <?php
 if (isset($_POST['name'], $_POST['lang'])){
    $name = $_POST['name'];
    $lang = $_POST['lang'];
    echo $name . '<br>';
    echo $lang;
    }
?>

</body>

</html>
