import {Character, CharactersQueries} from "#/features/character/character.type";
import getApiUrl from "#/features/endpoint/getApiUrl";
import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";
import withEntity from "#/features/endpoint/entity/withEntity";
import withQuery from "#/features/endpoint/query/withQuery";

export default async function getCharacters(query?: CharactersQueries): Promise<
    ResponseWithPagination<Character[]>
> {
    const fetchedCharacters = await fetch(getApiUrl(withEntity("character"), withQuery(query || {})));
    const charactersResponse = await fetchedCharacters.json();
    return charactersResponse;
}
