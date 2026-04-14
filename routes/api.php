<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\TicketController;
//ticket 
Route::get('/tickets', [TicketController::class, 'index']);
// login
Route::post('/login', [AuthController::class, 'login']);