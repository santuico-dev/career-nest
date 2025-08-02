<?php

namespace App\Services;


/*
***************************
  SERVICE TO HANDLE UTILITIES/HELPERS NEEDED LIKE OTP
***************************
*/

class UtilitiesService
{

    public function generateRandomSixDigitNumber()
    {
        $generatedSixDigitNumber = rand(100000, 999999);
        return $generatedSixDigitNumber;
    }


    public function generateRandomFourDigitNumber()
    {
        $generatedFourDigitNumber = rand(1000, 9999);
        return $generatedFourDigitNumber;
    }
}
