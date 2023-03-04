import { Character } from "#/features/character/character.type";



import {Card, CardContent, CardHeader, CardMedia, Divider} from "@mui/material";


export default function CharacterCard(character: Character) {
    return (
        <Card className="w-full">
            <CardHeader
                title={character.name}
                subheader={
                    <div className="text-inherit flex gap-1">
                        <span
                            className={
                                character.status === "Alive"
                                    ? "uppercase text-green-400"
                                    : "uppercase text-red-500"
                            }
                        >
                            {character.status}
                        </span>
                        {character.gender}
                    </div>
                }
            />
            <CardMedia
                component="img"
                height="400"
                image={character.image}
                alt={character.name}
            />
            <CardContent className="flex flex-col gap-2">
                <div className="flex justify-between gap-2">
                    <p className="capitalize">location</p>
                    <span className="block flex-1 bg-gray-700 h-[1px] self-center"></span>
                    <p>{character.location.name}</p>
                </div>
                <div className="flex justify-between gap-2">
                    <p className="capitalize">origin</p>
                    <span className="block flex-1 bg-gray-700 h-[1px] self-center"></span>
                    <p>{character.origin.name}</p>
                </div>
                <div className="flex justify-between gap-2">
                    <p className="capitalize">species</p>
                    <span className="block flex-1 bg-gray-700 h-[1px] self-center"></span>
                    <p>{character.species}</p>
                </div>

            </CardContent>
        </Card>
    );
}