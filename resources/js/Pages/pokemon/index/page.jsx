import { usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";
import { Pokemon } from "./partials/pokemon";

export default function ListPokemon() {
    const { pokemon, searchQuery, auth } = usePage().props;
    const [search, setSearch] = useState(searchQuery);

    const handleSearch = (e) => {
        let newSearch = e.target.value;
        setSearch(newSearch);

        router.get("/", { search }, { preserveState: true, replace: true });
    };

    return (
        <>
            <div>
                <div className="flex gap-2">
                    <label htmlFor="search">Search Pokemon</label>

                    <div className="grow"></div>

                    {!auth.user && (
                        <>
                            <Link href="/register">Register</Link>
                            <Link href="/login">Login</Link>
                        </>
                    )}
                </div>
                <input
                    id="search"
                    type="search"
                    value={search}
                    placeholder="e.g Ghastly..."
                    className="w-full rounded-md border-slate-300 bg-slate-100"
                    onChange={handleSearch}
                />
            </div>

            <div className="grid grid-cols-5 gap-4 mt-4">
                {pokemon.map((poke) => (
                    <Pokemon key={poke.id} pokemon={poke} />
                ))}
            </div>
        </>
    );
}
