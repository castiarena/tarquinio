<?php

/**
 * Created by PhpStorm.
 * User: agus
 * Date: 05/10/15
 * Time: 11:35
 */
class PreparaString
{
    public static function clase($c){

        $sep = explode('-',$c);
        $str = '';
        foreach($sep as $s){
            $str .= ucfirst(strtolower($s));
        }

        return $str;
    }
}