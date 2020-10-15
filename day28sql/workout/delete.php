<?php

require_once 'DB.php';
require_once 'DB_functions.php';

connect('127.0.0.1', 'world', 'root', '');

$query = "DELETE 
        FROM `regions`
        WHERE `id` = ?";

// delete($query, [1]);

$query = "DELETE
        FROM `regions`
        WHERE `slug` LIKE ? ";

// delete($query, ['%america%']);

require_once 'Region.php';

$region = new Region;
$region->delete(18);
var_dump($region);