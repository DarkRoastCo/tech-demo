<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pokemon', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->integer('pokeapi_id')->unique();
            $table->json('types');
            $table->json('stats');
            $table->integer('base_experience')->nullable();
            $table->integer('height')->nullable();
            $table->integer('weight')->nullable();
            $table->string('sprite_url')
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pokemon');
    }
};
