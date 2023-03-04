import {GetServerSideProps} from "next";
import {useRouter} from "next/router";

import CharacterCard from "#/features/character/CharacterCard/CharacterCard";
import CharacterFilter, {
    CharacterFilterQuery,
} from "#/features/character/CharacterFilter/CharacterFilter";
import {Character} from "#/features/character/character.type";
import getCharacters from "#/features/character/getCharacters";
import {ResponseWithPagination} from "#/features/endpoint/endpoint.type";
import withQuery from "#/features/endpoint/query/withQuery";

type CharactersPageProps = {
    charactersResponse: ResponseWithPagination<Character[]>;
    query: CharacterFilterQuery;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {query} = context;
    const charactersResponse = await getCharacters(query);

    return {
        props: {
            charactersResponse,
            query,
        },
    };
};

export default function CharactersPage({
                                           charactersResponse,
                                           query,
                                       }: CharactersPageProps) {
    const router = useRouter();

    const filterCharacters = (query: CharacterFilterQuery) => {
        router.push("/characters" + withQuery(query));
    };
    console.log(charactersResponse);
    console.log(query);

    return (
        <div className="container mx-auto flex flex-col gap-5 px-3">
            <h1 className="text-center text-3xl uppercase">characters</h1>
            <CharacterFilter
                defaultValues={query}
                submitCallBack={filterCharacters}
            />
            {charactersResponse.error && <div className="w-full rounded bg-red-500 p-3">
                <p>{charactersResponse.error}</p>
            </div>}
            <div className="flex flex-col gap-5">
                {charactersResponse.results &&
                    charactersResponse.results.map((character) => (
                        <CharacterCard key={character.id} {...character} />
                    ))}
            </div>
        </div>
    );
}
