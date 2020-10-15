<?php

require_once 'DB.php';
require_once 'DB_functions.php';

connect('127.0.0.1', 'world', 'root', '');

$query = "SELECT *
        FROM `cities`
        LIMIT 100";

// var_dump(select($query));

$query = "SELECT *
    FROM `cities`
    ORDER BY `population` DESC
    LIMIT 100";

// var_dump(select($query));



function get_cities($page_nr) 
{
    $offset = ($page_nr -1) * 20;
    $query = "SELECT *
            FROM `cities`
            LIMIT {$offset}, 20";
    
    $cities = select($query);
    return $cities;
}

var_dump(get_cities(2));


