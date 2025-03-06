<?php

namespace App\Http\Controllers\Pokemon;

use App\Http\Controllers\Controller;
use App\Models\Pokemon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowPokemonController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Pokemon $pokemon)
    {
        return Inertia::render('pokemon/show/page', [
            'pokemon' => $pokemon,
        ]);
    }
}
