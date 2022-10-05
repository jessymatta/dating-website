<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Traits\ResponseJson;

class MessageController extends Controller{


    public function sendMessage(Request $request, $receiver_id){
        $receiver = User::where('id', $receiver_id)->first();
        Auth::user()->messages()->attach($receiver_id,  ['content' => $request->message]);
    }
    
    public function getAllSentMessages(){
        $user_id = Auth::id();//the logged in user
        $sent_messages = DB::table('messages')->where('sender_id', $user_id)->get();
        
        return response()->json([
            "status"=>"success",
            "message"=>"returned all sent messages",
            "messss"=> $sent_messages
        ]);
    }
}
