<?php

include_once('autoload.php');

$controller = !isset($_GET['controller']) ? 'Home' : PreparaString::clase($_GET['controller']) ;
$metodo = !isset($_GET['metodo']) || strlen($_GET['metodo'])==0 ? 'index' : PreparaString::clase($_GET['metodo']) ;


$obj = new $controller;
$obj->$metodo();
