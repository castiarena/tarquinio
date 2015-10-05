<?php



class Producto
{
    public $id;
    public $precio;
    public $moneda;
    public $titulo;
    public $descripcion;
    public $template;
    protected $db;

    function __construct($id = null){
        $this->db = new Db();
        $this->template = file_get_contents('vistas/producto.html');
        if($id!= null){
            $q = new Query('producto','id','=',$id);
            $q->select(1);
            $p = $this->db->traer($q);
            $p = $p[0];

            $this->precio       = $p['precio'];
            $this->titulo       = $p['titulo'];
            $this->descripcion  = $p['descripcion'];
            $this->moneda       = $p['moneda'];
            $this->id           = $p['id'];
        }
    }

    public function replaces(){
        $this->template = str_replace('{{ titulo }}', $this->titulo, $this->template);
        $this->template = str_replace('{{ descripcion }}', $this->descripcion, $this->template);
        $this->template = str_replace('{{ precio }}', $this->precio, $this->template);
        $this->template = str_replace('{{ moneda }}', $this->moneda, $this->moneda);
        return $this->template;
    }
}