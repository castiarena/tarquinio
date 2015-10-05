<?php

class Query
{
    private $tabla;
    private $campo;
    private $valor;
    private $tipo;
    private $asignador;
    private $query;

    public function __construct($tabla, $c = null ,$a = null, $v = null){
        $v = gettype($v) == 'string' ? "'".$v."'" : $v;

        $this->tabla = $tabla;
        $this->campo = $c;
        $this->valor = $v;
        $this->asignador = $a;
    }

    public function setAsingador($a){
        $this->asignador = $a;
    }

    public function setCampo($c){
        $this->campo = $c;
    }

    public function setValor($v){
        $this->valor = $v;
    }

    public function select($cuanto){
        $this->query = <<<SQL
SELECT $cuanto
FROM $this->tabla
SQL;
    }

    public function selectWhere($cuanto){
        $this->query = <<<SQL
SELECT $cuanto
FROM $this->tabla
WHERE $this->campo $this->asignador $this->valor;
SQL;
    }

    public function insert($listaCampos,$listaValores){
        $tabla = $this->tabla;
        $listaCampos = $this->armaInsert($listaCampos);
        $listaValores = $this->armaInsert($listaValores,true);
        $this->query = <<<SQL
INSERT INTO  $tabla (
  $listaCampos
)
VALUES (
  $listaValores
);
SQL;
    }

    private function armaInsert($lista, $t = false){
        $q = '';

        foreach($lista as $key=>$campo){
            if($t){
                $campo = gettype($campo) == 'string'? "'$campo'" : $campo;
            }
            $q.=$campo;
            if($key+1 < count($lista)){
                $q.=',';
            }
        }
        return $q;
    }

    public function borrar($tabla, $campo, $asignador, $valor){
        $this->query = <<<SQL
DELETE FROM $tabla WHERE  $campo $asignador $valor;
SQL;
    }


    public function dar(){
        return $this->query;
    }



}