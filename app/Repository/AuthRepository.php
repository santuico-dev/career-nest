<?php

namespace App\Repository;

use App\Models\User;
use App\Repository\Interface\AuthInterface;
use App\Services\EmailService;
use Illuminate\Http\Request;

class AuthRepository implements AuthInterface
{

    // REPO
    protected $userRepository;

    // SERVICES
    protected $emailService;
    public function __construct(UserRepository $userRepository, EmailService $emailService)
    {
        $this->userRepository = $userRepository;
        $this->emailService = $emailService;
    }

    public function loginUser($email)
    {
        try {

            // TODO: Maybe Check if the same yung IP address niya, so we can send an OTP code if iba yung nag login/access sa account niya. Pero kapag same, igrant lang natin yung access nito?.


            return null;
        } catch (\Exception $e) {
            return response()->json(['message' => 'Something went wrong while trying to login account.'], 500);
        }
    }

    public function registerUser(Request $request)
    {
        try {

            $isUserExisting =
            $this->userRepository->findUserByEmail($request->email)
            ||
            $this->userRepository->findUserByPhoneNumber($request->phoneNumber);

            if ($isUserExisting) {
                return response()->json(['message' => 'Account with the same email or phone number already exists'], 500);
            }

            // GET ALL USER DATA FROM REQUEST
            $userData = [

            ];

            // INSERT USER DATA INTO DB
            $this->userRepository->createUser($userData);

            // SEND OTP CODE TO USER EMAIL


            return null;
        } catch (\Exception $e) {
            return response()->json(['message' => 'Something went wrong while trying to create account.'], 500);
        }
    }

    public function logoutUser(Request $request): ?User
    {
        return null;
    }

    public function forgotPassword(Request $request): ?User
    {
        return null;
    }
}
