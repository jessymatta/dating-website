<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller{


    public function sendMessage(Request $request, $receiver_id){
        $receiver = User::where('id', $receiver_id)->first();
        Auth::user()->messages()->attach($receiver_id,  ['content' => $request->message]);
    }
    
}
