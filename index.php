<?php

include_once('autoload.php');

$controller = !isset($_GET['controller']) ? 'Home' : $_GET['controller'] ;
$metodo = !isset($_GET['metodo']) ? 'index' : $_GET['metodo'] ;


$obj = new $controller;
$obj->$metodo();
