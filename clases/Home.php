<?php

/**
 * Created by PhpStorm.
 * User: agus
 * Date: 02/10/15
 * Time: 17:31
 */
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