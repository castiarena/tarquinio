<?php

include_once('autoload.php');

$home = new Pagina('home');
$home->titulo = 'Tarquinio - Home';

echo $home->dibujar();