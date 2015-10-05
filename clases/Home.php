<?php


class Home extends Controller
{
    protected function init(){

    }
    
    public function index(){
        $this->pagina = new Pagina('home');
        $this->pagina->titulo = 'Tarquinio - Home';

        $this->render();
    }
}