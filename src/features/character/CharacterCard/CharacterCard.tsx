import { ReactNode } from "react";

import { Character } from "#/features/character/character.type";

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
} from "@mui/material";

type CharacterCardProps = {
    character: Character;
    actionContent?: ReactNode;
    onDetailClick?: (character: Character) => void;
};

export default function CharacterCard({
    character,
    actionContent = <></>,
    onDetailClick = () => {},
}: CharacterCardProps) {
    const clickAction = () => {
        onDetailClick(character);
    };

    return (
        <Card className="w-full lg:w-[400px]" onClick={clickAction}>
            <CardHeader
                title={character.name}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertRoundedIcon />
                    </IconButton>
                }
                subheader={
                    <div className="flex gap-1 text-inherit">
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
                    <span className="block h-[1px] flex-1 self-center bg-gray-700"></span>
                    <p>{character.location.name}</p>
                </div>
                <div className="flex justify-between gap-2">
                    <p className="capitalize">origin</p>
                    <span className="block h-[1px] flex-1 self-center bg-gray-700"></span>
                    <p>{character.origin.name}</p>
                </div>
                <div className="flex justify-between gap-2">
                    <p className="capitalize">species</p>
                    <span className="block h-[1px] flex-1 self-center bg-gray-700"></span>
                    <p>{character.species}</p>
                </div>
                <div className="flex justify-between gap-2">
                    <p className="capitalize">episodes</p>
                    <span className="block h-[1px] flex-1 self-center bg-gray-700"></span>
                    <p>{character.episode.length}</p>
                </div>
            </CardContent>
            <CardActions disableSpacing>{actionContent}</CardActions>
        </Card>
    );
}
