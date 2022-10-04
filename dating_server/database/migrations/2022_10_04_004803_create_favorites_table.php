<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFavoritesTable extends Migration
{

    public function up()
    {
        Schema::create('favorites', function (Blueprint $table) {
            //references to the users table
            $table->integer('favorited_user_id')->unsigned()->index()->onDelete('cascade');
            $table->foreign('favorited_user_id')->references('id')->on('users');
            $table->integer('user_id')->unsigned()->index()->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('favorites');
    }
}
