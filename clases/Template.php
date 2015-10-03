<?php

namespace Templates;

class Template {
    public $pagina;
    public $layout;
    public $replaces = [];

    function __construct($pagina){
        $this->layout = file_get_contents('vistas/layout.html');
        $this->pagina = $pagina;
        $this->replaces['titulo'] = $pagina->titulo;
        $this->replaces['meta'] = $pagina->meta;
        $this->replaces['content'] = $pagina->content;

    }

    public function replace(){
        foreach($this->replaces as $key=>$replace){
            $this->layout = str_replace('{{ '.$key.' }}',$replace, $this->layout);
        }
    }

}