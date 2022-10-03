<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct(){
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(Request $request){
        $validator =Validator::make($request->all(),[
            'name'=>'required',
            'username'=>'required|string|unique:users',
            'email'=>'required|string|email|unique:users',
            'gender' => 'required',
            'interested_in' => 'required',
            'location' => 'required',
            'birthdate'=>'required',
            'password'=>'required|string|confirmed|min:6'

        ]);

        //if validation fails
        if($validator->fails()){
            return response() -> json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
                'name'=> $request->name,
                "email"=> $request->email,
                "username"=> $request->username,
                "gender"=>$request->gender,
                "interested_in"=>$request->interested_in,
                "location"=> $request->location,
                "birthdate"=> $request->birthdate,
                "password"=>Hash::make($request->password)
            
        ]);
        
        return response()->json([
            'message'=>'User successfully registered',
            'user'=>$user
        ], 201);
    }


}
