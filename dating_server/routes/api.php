<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group(['prefix' => 'v0.1'], function () {
    Route::group(['middleware' => 'auth:api'], function ($router) {
        Route::get('/add_favorite/{id}', [AuthController::class, 'addFavorite'])->name('add_favorite');
        Route::get('/remove_favorite/{id}', [AuthController::class, 'removeFavorite'])->name('remove_favorite');
    });

    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});
