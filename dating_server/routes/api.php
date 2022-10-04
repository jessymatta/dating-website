<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'jwt.auth', 'prefix' => 'auth'], function($router){
    Route::post('/register',[AuthController::class, 'register']);
    Route::get('add_favorite/{id}',[AuthController::class, 'addFavorite'])->name('add_favorite');
});

Route::post('/login',[AuthController::class, 'login'])->name('login');