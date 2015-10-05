<?php

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