<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUsersInterestedIn(){
        $user_id = Auth::id();
        $user = Auth::user();

        //Get the logged in user interested_in input : female, male or both
        $gender_interested_in = [$user->interested_in];

        if($gender_interested_in == "Both"){
            $gender_interested_in = ["Female", "Male"];
        }

        //get the interested in Users
        $to_return = User::where('id', '!=', $user_id)
        ->whereIn ('gender', $gender_interested_in)
        ->get();

        return response()->json([
            "status"=>"success",
            "message"=>"returned interested in users",
            "interested_in_profiles"=> $to_return
        ]);
    }

    public function getUserById($id){
        $to_return = User::where('id', $id)->get()->first();
        return response()->json([
            "status"=>"success",
            "message"=>"returned user profile",
            "user info"=> $to_return
        ]);
    }
}
