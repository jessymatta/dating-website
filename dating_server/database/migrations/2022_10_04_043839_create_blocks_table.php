<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlocksTable extends Migration
{
    public function up()
    {
    //     Schema::create('blocks', function (Blueprint $table) {
    //         //references to the users table
    //         $table->unsignedBigInteger('blocked_user_id')->index()->onDelete('cascade');
    //         $table->foreign('blocked_user_id')->references('id')->on('users');
    //         $table->unsignedBigInteger('user_id')->index()->onDelete('cascade');
    //         $table->foreign('user_id')->references('id')->on('users');
    //     });
    // }

    Schema::create('blocks', function (Blueprint $table) {
        //references to the users table
        $table->integer('blocked_user_id');
        $table->integer('user_id');
    });
}

    public function down()
    {
        Schema::dropIfExists('blocks');
    }
}
