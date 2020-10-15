<?php

class Region 
{
  public $id = null;
  public $name = null;
  public $slug = null;  

    // inserts this object as a new record into the table 'regions'
  public function insert()
  {
    $query = "INSERT
            INTO `regions`
            (`name`, `slug`)
            VALUES 
            (?, ?)
    ";

    insert($query, [$this->name, $this->slug]);

    // updates the value of the property id with value of id column that was assigned to it by the database
    $this->id = last_insert_id();
  }

  public function update() 
  {
      if ($this->id == null) {
          return false;
      } else {
          $query = "UPDATE `regions`
            SET `name` = ?,
                `slug` = ?
            WHERE `id` = ? ";
      
      update($query, [$this->name, $this->slug, $this->id]);
      }
     
  }

  public function save() {
    if (empty($this->id)) {
      $this->insert();
    } else {
      $this->update();
    }
  }

  public function delete() {
    if ($this->id == null) {
      echo 'Pick another';
      return false;
    } else {
    $query = "DELETE
        FROM `regions`
        WHERE `id` LIKE ? ";

  delete($query, [$this->id]);
    }
  }
}