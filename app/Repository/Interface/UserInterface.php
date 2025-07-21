<?php
namespace App\Repository\Interface;

use App\Models\User;

interface UserInterface {

    public function findUserById($useID): ?User;
    public function findUserByEmail($email): ?User;
    public function findUserByPhoneNumber($phoneNumber): ?User;
    public function createUser($userData);
}
