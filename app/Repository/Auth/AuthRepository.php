<?php

namespace App\Repository;

use App\Models\User;
use App\Repository\Interface\AuthInterface;
use App\Services\EmailService;
use App\Services\UtilitiesService;
use Illuminate\Http\Request;

class AuthRepository implements AuthInterface
{

    // REPO
    protected $userRepository;

    // SERVICES
    protected $emailService;
    protected $utilitiesService;
    public function __construct(UserRepository $userRepository, EmailService $emailService, UtilitiesService $utilitiesService)
    {
        $this->userRepository = $userRepository;
        $this->emailService = $emailService;
        $this->utilitiesService = $utilitiesService;
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
                'email' => $request->email,
                'firstName' => $request->firstName,
                'lastName' => $request->lastName,
                'middleName' => $request->middleName,
                'suffixName' => $request->suffixName,
                'phoneNumber' => $request->phoneNumber,
                'gender' => $request->gender,
            ];

            // INSERT USER DATA INTO DB
            $this->userRepository->createUser($userData);

            // SEND OTP CODE TO USER EMAIL
            $generatedOTPCode = $this->utilitiesService->generateRandomSixDigitNumber();
            $this->emailService->sendOTPCodeEmail($request->email, $generatedOTPCode);

            return response()->json(['message' => 'Account successfully created, a confirmation code has been sent to your email.'], 200);
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
