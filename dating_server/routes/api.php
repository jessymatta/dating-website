<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\BlockedUsersController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UploadPPController;


Route::group(['prefix' => 'v0.1'], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/homepage', [UserController::class, 'getUsersInterestedIn'])->name('homepage');
        Route::get('/add_favorite/{id}', [FavoritesController::class, 'addFavorite'])->name('add_favorite');
        Route::get('/remove_favorite/{id}', [FavoritesController::class, 'removeFavorite'])->name('remove_favorite');
        Route::get('/block_user/{id}', [BlockedUsersController::class, 'blockUser'])->name('block_user');
        Route::post('/upload_pp', [UploadPPController::class, 'uploadProfilePic'])->name('upload_pp');
        Route::get('/get_user/{id}', [UserController::class, 'getUserById'])->name('get_user');
    });

    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});

