<?php

namespace App\Console\Commands;

use App\Models\Pokemon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class FetchPokemonData extends Command
{
    protected $signature = 'pokemon:fetch {limit=151}';

    protected $description = 'Fetch Pokémon data from the PokeAPI and store it in the database';

    public function handle()
    {
        $limit = $this->argument('limit');
        $this->info("Fetching data for {$limit} Pokémon...");

        $response = Http::get("https://pokeapi.co/api/v2/pokemon?limit={$limit}");

        if ($response->failed()) {
            $this->error('Failed to fetch Pokémon data.');

            return;
        }

        $pokemon_list = $response->json('results');

        foreach ($pokemon_list as $pokemon) {
            $this->fetchAndStorePokemon($pokemon['name']);
        }
    }

    protected function fetchAndStorePokemon($name)
    {
        $response = Http::get("https://pokeapi.co/api/v2/pokemon/{$name}");

        if ($response->failed()) {
            $this->error("Failed to fetch details for {$name}");

            return;
        }

        $data = $response->json();

        Pokemon::updateOrCreate(
            ['pokeapi_id' => $data['id']],
            [
                'name' => $data['name'],
                'types' => collect($data['types'])->pluck('type.name')->toArray(),
                'base_experience' => $data['base_experience'],
                'height' => $data['height'],
                'weight' => $data['weight'],
                'stats' => collect($data['stats'])->mapWithKeys(fn ($stat) => [$stat['stat']['name'] => $stat['base_stat']])->toArray(),
                'sprite_url' => $data['sprites']['front_default'] ?? null,
            ]
        );

        $this->info("Stored: {$data['name']}");
    }
}
