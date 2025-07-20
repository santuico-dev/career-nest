<?php

namespace App\Http\Controllers;

use App\Repository\AuthRepository;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $authRepository;

    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    public function loginUser(Request $request)
    {
        $loginResponse = $this->authRepository->loginUser($request);
        return $loginResponse;
    }

    public function registerUser(Request $request)
    {
        $registerResponse = $this->authRepository->registerUser($request);
        return $registerResponse;
    }
}
