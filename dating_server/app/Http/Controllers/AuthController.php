<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Helpers\ResponseHelper;
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
            'status'=>"success",
            'user'=>$user
        ], 201);
    }

    // Login 
    public function login(Request $request){
        $validator =Validator::make($request->all(),[
            'username'=>'required|string',
            'password'=>'string|min:6'
        ]);

        //if validation fails
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 422);
        }
        //if user is not authorized
        if(!$token=auth() -> attempt($validator->validated())){
            return response()->json(['error'=>'Unauthorized'], 401);
        }
        return $this->createNewToken($token);
    }

    //A helper function for login, that will create a new token when the user login
    public function createNewToken($token){
        return response()->json([
            'access_token'=>$token,
            'token_type'=>'bearer',
            'expires_in'=>auth()->factory()->getTTL()*60,
            'user'=>auth()->user()
        ]);
    }

    //TODO Remove Logout and just destroy the jwt on the frontend
    public function logout(){
        auth()->logout();
        return response()->json([
            'message'=>'User logged out'
        ]);
    }

    public function addFavorite($id){
        //Add to favorites
        $fav_user=auth()->user()->favorites()->attach([$id]);
        return response()->json([
            "status"=>"success",
            'message'=>'User added to favorites'
        ]);
    }

    


}
