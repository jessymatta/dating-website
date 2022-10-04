<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UploadPPController extends Controller
{

    public function uploadProfilePic(Request $request)
    {

        echo "hi";
        //add authorized userid here

        /*1.will receive a base 64 image
            2.should decode it
            3.name it
            4.save it to the public folder
            5.update it in the db
        */

        $user_id = Auth::id();
        $image_64 = $request->pp_base64;
        // echo ($image_64);


        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf

        $replace = substr($image_64, 0, strpos($image_64, ',') + 1);
        $image = str_replace($replace, '', $image_64);
        $image = str_replace(' ', '+', $image);
        $image_special_name=$user_id+5;
        $imageName = $image_special_name . '.' . $extension;
        echo ($imageName);

        //Update the database
        User::where('id', auth()->user()->id)->update([
            "profile_picture" => $imageName
        ]);

        Storage::disk('public')->put($imageName, base64_decode($image));
        echo (base64_decode($image));
        echo "success";
    }
}
