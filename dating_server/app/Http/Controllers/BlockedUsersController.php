<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class BlockedUsersController extends Controller
{
    public function blockUser($id){
        $user_to_block=Auth::user()->blockUser()->attach($id);
        return response()->json([
            "status"=>"success",
            'message'=>'User blocked successfuly'
        ]);
    }

}
