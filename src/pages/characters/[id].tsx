import { GetStaticPaths, GetStaticProps } from "next";

import CharacterCard from "#/features/character/CharacterCard/CharacterCard";
import { Character } from "#/features/character/character.type";
import getCharacter from "#/features/character/getCharacter";
import getCharacterEpisodes from "#/features/character/getCharacterEpisodes";
import getCharactersList from "#/features/character/getCharactersList";
import { Episode } from "#/features/episodes/episodes.type";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

export const getStaticPaths: GetStaticPaths = async () => {
    const charactersResponse = await getCharactersList();

    return {
        paths: charactersResponse.results.map((character) => ({
            params: { id: character.id.toString() },
        })),
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;

    const character = await getCharacter(params?.id as string);
    const episodes = await getCharacterEpisodes(character.episode);

    if (!character) {
        return {
            redirect: {
                permanent: false,
                destination: "/characters",
            },
        };
    }

    return {
        props: {
            character,
            episodes,
        },
    };
};

type CharacterPageProps = {
    character: Character;
    episodes: Episode[];
};

export default function CharacterPage({
    character,
    episodes,
}: CharacterPageProps) {
    console.log(episodes);
    return (
        <div className="container mx-auto flex flex-col gap-5 px-3">
            <div className="flex items-center justify-center gap-2">
                <h1 className="text-center text-3xl uppercase">
                    {character.name}
                </h1>
                <IconButton size="large">
                    <FavoriteBorderRoundedIcon fontSize="large" />
                </IconButton>
            </div>
            <CharacterCard character={character} />
            <h1 className="text-center text-3xl uppercase">episodes</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Episode</TableCell>
                            <TableCell align="right">Air Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {episodes &&
                            episodes.map((episode) => (
                                <TableRow
                                    key={episode.name}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {episode.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {episode.episode}
                                    </TableCell>
                                    <TableCell align="right">
                                        {episode.air_date}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
