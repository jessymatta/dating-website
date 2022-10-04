<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\BlockedUsersController;


Route::group(['prefix' => 'v0.1'], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/add_favorite/{id}', [FavoritesController::class, 'addFavorite'])->name('add_favorite');
        Route::get('/remove_favorite/{id}', [FavoritesController::class, 'removeFavorite'])->name('remove_favorite');
        Route::get('/block_user/{id}', [BlockedUsersController::class, 'blockUser'])->name('block_user');
    });

    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});
