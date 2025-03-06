<?php

namespace App\Http\Controllers\Pokemon;

use App\Http\Controllers\Controller;
use App\Models\Pokemon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ListPokemonController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $search = $request->input('search', '');

        $pokemon = Pokemon::query()
            ->when($search, function ($query) use ($search) {
                return $query->where('name', 'like', "%{$search}%");
            })
            ->get();

        return Inertia::render('pokemon/index/page', [
            'pokemon' => $pokemon,
            'searchQuery' => $search,
        ]);
    }
}
