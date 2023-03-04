import {
    Character,
    CharactersQueries,
} from "#/features/character/character.type";
import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";
import withEntity from "#/features/endpoint/entity/withEntity";
import getApiUrl from "#/features/endpoint/getApiUrl";
import withQuery from "#/features/endpoint/query/withQuery";

export default async function getCharactersList(
    query?: CharactersQueries,
): Promise<ResponseWithPagination<Character[]>> {
    const charactersListResponse = await fetch(
        getApiUrl(withEntity("character"), withQuery(query || {})),
    );
    return await charactersListResponse.json();
}