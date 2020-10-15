<?php


$old_array = [
    [
        'name' => 'Bruce',
        'surname' => 'Wayne',
        'occupation' => 'billionaire'
    ],
    [
        'name' => 'Clark',
        'surname' => 'Kent',
        'occupation' => 'reporter'
    ],
    [
        'name' => 'Peter',
        'surname' => 'Parker',
        'occupation' => 'photographer'
    ]
];

// declare a new array of data as an empty array
$new_array = [];

 
foreach ($old_array as $old_key => $old_value) {
 
    
    $new_key = $old_key;
 
    $new_value = [
        'full_name' => $old_value['name'] . ' ' . $old_value['surname'],
        'job' => $old_value['job']
    ];
 
    $new_array[$old_key] = $new_value;
}

var_dump($new_array);

class Person 
{
    public $first_name = null;
    public $last_name = null;
    public $job = null;
}

$new_array = [];

 
foreach ($old_array as $old_key => $old_value) {
 
    
    $new_value = new Person;
    $new_value->first_name = $old_value['name'];
    $new_value->last_name = $old_value['surname'];
    $new_value->job = $old_value['occupation'];
 
    $new_array[$old_key] = $new_value;
}

var_dump($new_array);

$new_array = [
    'billionaire',
    'reporter',
    'photographer'
];

foreach ($old_array as $value) {
    $new_array[] = $value['occupation'];
}
var_dump($new_array); 