<?php

require_once 'DB.php';
require_once 'DB_functions.php';

connect('127.0.0.1', 'world', 'root', '');

// $query = "
// SELECT * 
// FROM `cities`
// WHERE `population` > 1000000
//     AND `population` <2000000
// ";

// $cities = select($query);

// var_dump($cities);

// below is the safe way to do it to prevent hacking.  Use ?s and then add the values to the array in the query select
$query = "
    SELECT * 
        FROM `cities`
    WHERE `population` > ?
    AND `population` < ?
";

$cities = select($query, [1000000, 2000000]);

var_dump($cities);