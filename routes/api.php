<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
***************************
  ALL API ROUTES FOR BACKEND
***************************
*/

// AUTHENTICATION

//THROTTLE:60 MEANS THAT FE CAN SEND MAX REQ PER PERIOD
Route::middleware(['throttle:60'])->controller(AuthController::class)->group(function () {

});




