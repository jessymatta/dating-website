<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'gender',
        'interested_in',
        "location",
        "birthdate",
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){
        return [];
    }

    public function favorites(){
        return $this->belongsToMany(User::class, 'favorites', 'user_id', 'favorited_user_id');
    }

    public function blockUser(){
        return $this->belongsToMany(User::class, 'blocks', 'user_id', 'blocked_user_id');
    }

        /*By default, only the model keys will be present on the pivot model. 
    If your intermediate table contains extra attributes, 
    you must specify them when defining the relationship:
        return $this->belongsToMany(Role::class)->withPivot('active', 'created_by');*/

    public function messages(){
        return $this->belongsToMany(User::class, 'messages', 'sender_id', 'receiver_id')->withTimestamps()->withPivot('content');
    }
}
