<?php
namespace App\Repository;

use App\Models\User;
use App\Repository\Interface\AuthInterface;
use Illuminate\Http\Request;

class AuthRepository implements AuthInterface {


    public function loginUser(Request $request):? User
    {
        return null;
    }

    public function registerUser(Request $request):? User
    {
        return null;
    }

    public function logoutUser(Request $request):? User
    {
        return null;
    }

    public function forgotPassword(Request $request):? User
    {
        return null;
    }
}

?>
