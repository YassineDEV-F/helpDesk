<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index()
    {
        // "with" tells Laravel to grab the related data in one go (Eager Loading)
        $tickets = Ticket::with(['user', 'service', 'comments'])->get();
        
        return response()->json($tickets);
    }
}
