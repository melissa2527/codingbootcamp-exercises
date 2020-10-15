<?php

class Customer {
    public $id;
    public $name;
    public $email;
    public $location; 

    public function getCustomer($id) {
        $this->id = $id;
        return 'John Doe';
    }
}

$customer = new Customer;
echo $customer->getCustomer(11);