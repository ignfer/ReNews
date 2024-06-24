<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model {
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $allowedFields = ['email', 'nickname', 'password', 'is_admin'];

    public function getUserByEmail($email) {
        return $this->where('email', $email)->first();
    }

    public function getUserById($id) {
        return $this->where('id', $id)->first();
    }

    public function getUserByEmailAndPassword($email, $password) {
        return $this->where('email', $email)->where('password', $password)->first();
    }

    public function getUserByEmailAndNickname($email, $nickname) {
        return $this->where('email', $email)->where('nickname', $nickname)->first();
    }

//    // One-to-many relationship with Comment
//    public function getComments()
//    {
//        return $this->hasMany('Comment', 'userID');
//    }
//
//    // One-to-many relationship with Post
//    public function getPosts()
//    {
//        return $this->hasMany('Post', 'userID);
//    }
}