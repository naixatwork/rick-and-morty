import {useEffect, useState} from "react";



import { GetServerSideProps } from "next";
import { cookies } from "next/headers";
import { useRouter } from "next/router";



import CharacterCard from "#/features/character/CharacterCard/CharacterCard";
import CharacterFilter, { CharacterFilterQuery } from "#/features/character/CharacterFilter/CharacterFilter";
import { Character } from "#/features/character/character.type";
import getCharactersList from "#/features/character/getCharactersList";
import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";
import withQuery from "#/features/endpoint/query/withQuery";



import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { Button } from "@mui/material";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const charactersResponse = await getCharactersList(query);

    if (charactersResponse.error) {
        return {
            redirect: {
                destination: "/characters",
                permanent: false,
            }
        }
    }

    return {
        props: {
            charactersResponse,
            query,
        },
    };
};

type CharactersPageProps = {
    charactersResponse: ResponseWithPagination<Character[]>;
    query: CharacterFilterQuery;
};

export default function CharacterListPage({
    charactersResponse,
    query,
}: CharactersPageProps) {

    const router = useRouter();

    const filterCharacters = (query: CharacterFilterQuery) => {
        router.push("/characters" + withQuery(query));
    };

    const redirectToCharacterDetail = (character: Character) => {
        router.push(`/characters/${character.id}`);
    };

    return (
        <div className="container mx-auto flex flex-col gap-5 px-3">
            <h1 className="text-center text-3xl uppercase">characters</h1>
            <CharacterFilter
                pagination={charactersResponse.info}
                defaultValues={query}
                submitCallBack={filterCharacters}
            />
            {charactersResponse.error && (
                <div className="w-full rounded bg-red-500 p-3">
                    <p>{charactersResponse.error}</p>
                </div>
            )}
            <div className="flex flex-wrap gap-5">
                {charactersResponse.results &&
                    charactersResponse.results.map((character) => (
                        <CharacterCard
                            key={character.id}
                            character={character}
                            onDetailClick={redirectToCharacterDetail}
                            actionContent={
                                <div className="flex w-full justify-end gap-2 p-2">
                                    <Button
                                        variant="contained"
                                        endIcon={<MoreVertRoundedIcon />}
                                    >
                                        details
                                    </Button>
                                </div>
                            }
                        />
                    ))}
            </div>
        </div>
    );
}