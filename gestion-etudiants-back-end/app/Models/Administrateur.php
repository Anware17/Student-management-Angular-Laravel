<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Administrateur extends Authenticatable implements JWTSubject
{
    use HasFactory;
    
    protected $fillable=['username',
          'password'];
    protected $hidden = [ 'password',
    ] ;
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [] ;
    }

}
