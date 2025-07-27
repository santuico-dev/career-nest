<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobHunter extends Model
{
    protected $table = 'job_hunter_db';

    protected $fillable = [
        'first_name',
        'last_name',
        'middle_name',
        'suffix_name',
        'email',
        'phone_number',
        'otp_code',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
