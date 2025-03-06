import { usePage } from "@inertiajs/react";
import { Vibrant } from "node-vibrant/browser";
import { useEffect, useState } from "react";

function Stat({ stat }) {
    let [baseName, value] = stat;
    let name = baseName.replace("-", " ");

    return (
        <div>
            <p class="text-sm capitalize">
                {name}: {value}
            </p>
            <progress max="100" value={value} class="h-2" />
        </div>
    );
}

export default function ShowPokemon() {
    let { pokemon } = usePage().props;
    let displayID = pokemon.id.toString().padStart(3, "0");
    let [color, setColor] = useState("");
    let [accentColor, setAccentColor] = useState("");

    useEffect(() => {
        let isMounted = true;

        Vibrant.from(pokemon.sprite_url)
            .getPalette()
            .then((palette) => {
                if (isMounted) {
                    setColor(palette.DarkMuted?.hex || "#000000");
                    setAccentColor(palette.LightVibrant?.hex || "#ffffff");
                }
            });

        return () => {
            isMounted = false;
        };
    }, [pokemon.sprite_url]);

    return (
        <div className="flex gap-4 items-start">
            <div
                className="relative p-4 rounded-md bg-[--color] aspect-square"
                style={{ "--color": color }}
            >
                <img src={pokemon.sprite_url} />
                <span
                    className="absolute right-2 bottom-2 text-sm font-semibold text-[--accent-color]"
                    style={{ "--accent-color": accentColor }}
                >
                    ({displayID})
                </span>
            </div>

            <div className="flex-1 space-y-2">
                <h1 className="font-bold capitalize text-md">{pokemon.name}</h1>

                <div className="flex gap-2 text-sm font-semibold capitalize">
                    {pokemon.types.map((type) => (
                        <span class="content-center px-2 h-6 rounded-full bg-neutral-200">
                            {type}
                        </span>
                    ))}
                </div>

                <p>
                    Height: {pokemon.height}, Weight: {pokemon.weight}
                </p>

                <div>
                    {Object.entries(pokemon.stats).map((stat) => (
                        <Stat stat={stat} />
                    ))}
                </div>
            </div>
        </div>
    );
}
