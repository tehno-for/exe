<?php
//Here is the simple use case of namespace. See how we can use same named class with the help of namespace. This is how namespace resolve naming collision.

namespace Mobile;

class User
{

    public $name = 'mobile user';
}

$user = new \Mobile\User;
echo $user->name."<br>";

namespace TV ;

class User
{
    public static $name = 'tv user';
}

echo \TV\User::$name;