<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class User {
  private $is_admin = false;

  private function has_admin_access() {
    return $this->is_admin === true;
  }

  public function access_level() {
    return $this->has_admin_access() ? 'Admin' : 'Standart';
  }

}

$user = new User;
// echo $user->is_admin();
// $user->is_admin = true;
// echo has_admin_access();
echo $user->access_level();



?>
