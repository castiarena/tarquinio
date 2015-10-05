<?php

class Db
{
    private $servidor;
    private $usuario;
    private $clave;
    private $nombreBD;
    private $puerto;
    private $conexion;
    private $estaAbierta;


    function __construct($servidor = "localhost" ,
                         $usuario = "root" , $clave = "secret" ,
                         $nombreBD = "tarquinio" , $puerto = "33060") {
        $this->servidor = $servidor;
        $this->usuario = $usuario;
        $this->clave = $clave;
        $this->puerto = $puerto;
        $this->nombreBD = $nombreBD;
        $this->abrir();
    }


    private function abrir(){
        $this->conexion = new mysqli(
            $this->servidor,
            $this->usuario,
            $this->clave,
            $this->nombreBD,
            $this->puerto);
        if($this->conexion->connect_errno > 0){
            $this->estaAbierta = false;
        }else{
            $this->estaAbierta = true;
        }
    }

    public function traer($sql){

        $result = $this->conexion->query($sql);
        if(!$result){
            return false;
        }else{
            $array = [];
            while($row = $result->fetch_assoc()){
                $array[] = $row;
            }
            return $array;
        }
    }

    public function ejecutar($sql){
        return $this->conexion->query($sql);
    }

    private function cerrar(){
        mysqli_close($this->conexion);
    }

    function __destruct(){
        $this->cerrar();
    }





}