<?php

require_once 'DB.php';
require_once 'DB_functions.php';

connect('127.0.0.1', 'world', 'root', '');

$query = "UPDATE `cities`
        SET `name` = ?
        WHERE `id` = ?";

// update($query, ['Prague', 3339]);

$query = "UPDATE `cities`
        SET `population` = ?
        WHERE `id` = ?";

// update($query, [1294513, 3339]);

$query = "UPDATE `countries`
        SET `head_of_state` = ?
        WHERE `name`  = ?";

// update($query, ['Xavier Espot Zamora', 'Andorra']);

$query = "UPDATE `countries`
        SET `head_of_state` = ?
        WHERE `head_of_state` = ? ";

// update($query, ['Donald J. Trump', 'George W. Bush']);

$query = "UPDATE `countries`
        SET `population` = ?,
            `GNP` = ?
        WHERE `name` = ? ";

// update($query, [300, 13.91, 'United States Minor Outlying Islands']);


require_once 'Region.php';
// $region = select_one("SELECT * FROM `regions` WHERE `name` = ?", ['Central Africa'], 'Region');
// $region->slug = 'middle-africa';
// $region->update();

$sahara = new Region;
$sahara->name = 'Sahara';
$sahara->save();

var_dump($sahara);