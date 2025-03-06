import { ArrowRight } from "@/Components/icons/arrow-right";
import { Link } from "@inertiajs/react";
import { Vibrant } from "node-vibrant/browser";
import { useEffect, useState } from "react";

export function Pokemon({ pokemon }) {
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
        <div
            className="p-4 rounded-md bg-[--color]"
            style={{ "--color": color }}
        >
            <Link
                className="flex justify-center"
                href={`/pokemon/${pokemon.id}`}
            >
                <img src={pokemon.sprite_url} />
            </Link>

            <Link
                className="flex items-center text-white capitalize group"
                href={`/pokemon/${pokemon.id}`}
            >
                <span className="text-sm font-semibold">
                    {pokemon.name} ({displayID})
                </span>

                <span className="grow"></span>

                <ArrowRight
                    className="h-4 transition-transform group-hover:translate-x-1 text-[--accent-color]"
                    style={{ "--accent-color": accentColor }}
                />
            </Link>
        </div>
    );
}
