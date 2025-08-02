<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobRecruiter extends Model
{
    protected $table = 'job_recruiter_db';

    protected $fillable = [
        'first_name',
        'last_name',
        'middle_name',
        'suffix_name',
        'email',
        'sub_email',
        'position',
        'phone_number',
        'verification_code',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
