<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class FavoritesController extends Controller
{
    public function addFavorite($id){
        //Add to favorites
        $fav_user=Auth::user()->favorites()->attach($id);
        return response()->json([
            "status"=>"success",
            'message'=>'User added to favorites'
        ]);
    }

    public function removeFavorite($id){
        //Remove from favorites
        $remove_user=Auth::user()->favorites()->detach($id);
        return response()->json([
            "status"=>"success",
            'message'=>'User removed from favorites'
        ]);
    }

    public function getAllFavorites(){
        //Get all favorited users
        $favorited_users = Auth::user()->favorites;
        return response()->json([
            "status"=>"success",
            'message'=>'Retrieved all favorited users',
            "fav_users"=>$favorited_users
        ]);

    }
}
