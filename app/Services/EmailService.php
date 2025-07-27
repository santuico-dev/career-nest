<?php
namespace App\Services;
/*
***************************
  SERVICES TO HANDLE EMAIL STUFF
***************************
*/

class EmailService {

    protected $utilitiesService;

    public function __construct(UtilitiesService $utilitiesService)
    {
        $this->utilitiesService = $utilitiesService;
    }


    public function sendForgotPasswordEmail($email)
    {

    }

    public function sendOTPCodeEmail($email, $code)
    {
    }

    public function sendJobUpdatesEmail($email, $jobUpdate)
    {

    }

}
