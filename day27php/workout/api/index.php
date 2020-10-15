<?php

include 'data.php';

require_once 'Celebrity.php';

// $taylor = new Celebrity;
//     $taylor->fill($data[0]);
//     var_dump($taylor);

$celebrities = [];

foreach ($data as $item) {
    $celebrity = new Celebrity;
    $celebrity->fill($item);

    $celebrities[] = $celebrity;
}



// send JSON headers
header('Content-type: application/json');
// output $celebrities encoded as a JSON string
echo json_encode($celebrities);