<?php

use App\Http\Controllers\Pokemon\ListPokemonController;
use App\Http\Controllers\Pokemon\ShowPokemonController;
use Illuminate\Support\Facades\Route;

Route::get('/', ListPokemonController::class)->name('pokemon.index');
Route::get('/pokemon/{pokemon}', ShowPokemonController::class)->name('pokemon.show');

require __DIR__.'/auth.php';
