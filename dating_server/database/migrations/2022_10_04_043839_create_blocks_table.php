<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlocksTable extends Migration
{
    public function up()
    {

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
