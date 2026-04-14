<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = ['titre', 'description', 'type', 'priorite', 'status', 'user_id', 'service_id'];

    // Connects back to the User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Connects to the Service
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
