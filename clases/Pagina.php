<?php

namespace Templates\Pagina;

use Templates\Template;

class Pagina {

    public $content;
    public $titulo;
    public $meta;
    public $replaces = [];
    private $template;

    function __construct($nombre){
        $this->content = file_get_contents('vistas/'.$nombre.'.html');
    }

    public function replace(){
        foreach($this->replaces as $key=>$replace){
            $this->template = str_replace('{{ '.$key.' }}',$replace, $this->template);
        }
    }

    public function dibujar(){
        $this->template = new Template($this);
        $this->template->replace();

        return $this->template->layout;
    }



}