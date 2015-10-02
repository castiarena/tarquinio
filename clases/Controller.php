<?php

/**
 * Created by PhpStorm.
 * User: agus
 * Date: 02/10/15
 * Time: 17:30
 */
class Controller
{
    public $pagina;

    public function __construct(){
        $this->init();
    }

    protected function init(){}

    protected function render(){
        echo $this->pagina->dibujar();
    }

}