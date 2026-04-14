<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
        return response()->json(['message' => 'Success'], 200);
        }

    // If it gets here, it MUST return a 401, NOT a 200.
        return response()->json(['message' => 'Unauthorized'], 401);
        }
}