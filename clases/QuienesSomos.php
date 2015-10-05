<?php

/**
 * Created by PhpStorm.
 * User: agus
 * Date: 05/10/15
 * Time: 11:22
 */
class QuienesSomos extends Controller
{
    protected function init(){

    }

    public function index(){
        $this->pagina = new Pagina('quienes-somos');
        $this->pagina->titulo = 'Tarquinio - Quienes Somos';
        $this->render();
    }

}