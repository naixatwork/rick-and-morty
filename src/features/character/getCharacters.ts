import {Character, CharactersQueries} from "#/features/character/character.type";
import getApiUrl from "#/features/endpoint/getApiUrl";
import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";
import withEntity from "#/features/endpoint/entity/withEntity";
import withQuery from "#/features/endpoint/query/withQuery";

export default async function getCharacters(queries?: CharactersQueries): Promise<
    ResponseWithPagination<Character[]>
> {
    const fetchedCharacters = await fetch(getApiUrl(withEntity("character"), withQuery(queries || {})));
    const charactersResponse = await fetchedCharacters.json();
    return charactersResponse;
}
4