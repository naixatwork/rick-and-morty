import { Character } from "#/features/character/character.type";
import withEntity from "#/features/endpoint/entity/withEntity";
import getApiUrl from "#/features/endpoint/getApiUrl";

export default async function getCharacter(
    characterId: string,
): Promise<Character> {
    const characterResponse = await fetch(
        getApiUrl(withEntity("character", characterId)),
    );
    return await characterResponse.json();
}
