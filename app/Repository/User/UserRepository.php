<?php

namespace App\Repository;

use App\Models\User;
use App\Repository\Interface\UserInterface;

class UserRepository implements UserInterface
{

    public function findUserById($useID): ?User
    {
        return User::where('id', $useID)->first();
    }
    public function findUserByEmail($email): ?User
    {
        return User::where('email', $email)->first();
    }
    public function findUserByPhoneNumber($phoneNumber): ?User
    {
        return User::where('phone_number', $phoneNumber)->first();
    }

    public function createUser($userData): ?User
    {
        return User::create($userData);
    }
}
