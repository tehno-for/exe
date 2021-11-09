<?php

class Sofa {

  public static $instance_count = 0;

  public $seats = 3;
  public $arms = 2;

  public function __construct($args = []) {
    self::$instance_count++;
    $this->seats = $args['seats'] ?? $this->seats;
    $this->arms = $args['arms'] ?? $this->arms;
  }

  public function __destruct(){
    echo "BYE!!!<br>";
    self::$instance_count--;
  }

  public function __clone(){
    self::$instance_count++;
  }

}

class Couch extends Sofa {
  public $arms = 0;
}

class Loveseat extends Sofa {
  public $seats = 2;
}

$sofa = new Sofa(['seats'=>3,'arms'=>2]);
echo 'Sofa<br />';
echo '- seats: ' . $sofa->seats . '<br />';
echo '- arms: ' . $sofa->arms . '<br />';
echo '<br />';

$sofa2 = clone $sofa;

$couch = new Couch(['seats'=>2]);
echo 'Couch<br />';
echo '- seats: ' . $couch->seats . '<br />';
echo '- arms: ' . $couch->arms . '<br />';
echo '<br />';

unset($sofa);

$loveseat = new Loveseat(['arms'=>2]);
echo '<br>Loveseat<br />';
echo '- seats: ' . $loveseat->seats . '<br />';
echo '- arms: ' . $loveseat->arms . '<br />';
echo '<br />';

echo 'Instance count: ' . Sofa::$instance_count . '<br />';

?>
