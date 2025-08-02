<?php

namespace App\Repository\Interface;

use App\Models\User;
use Illuminate\Http\Request;

/*
***************************
  INTER FACE FOR ALL AUTH BUSINESS LOGIC FOR DB
***************************
*/

interface AuthInterface
{
    public function loginUser($email);
    public function registerUser(Request $request);
    public function logoutUser(Request $request):? User;
    public function forgotPassword(Request $request):? User;
}
