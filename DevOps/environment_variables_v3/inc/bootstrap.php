<?php
require __DIR__ . '/../vendor/autoload.php';
//old version
//$dotenv = new Dotenv\Dotenv(__DIR__);
//$dotenv->load(); 
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
//echo getenv('SECRET');
// echo $_ENV['SECRET'];