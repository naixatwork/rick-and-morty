import getCharacter from "#/features/character/getCharacter";
import { Location } from "#/features/location/location.type";
import extractUrlTail from "#/utils/extractUrlTail/extractUrlTail";
import getRangedString from "#/utils/getRangedString/getRangedString";

export default async function getCharacterEpisodes(
    residentUrls: Location["residents"],
) {
    const residentUrlsCopy = [...residentUrls];

    const extractedIds = residentUrlsCopy.map(extractUrlTail);
    const characters = await getCharacter(getRangedString(extractedIds));
    const charactersList = Array.isArray(characters)
        ? characters
        : [characters];

    return charactersList;
}
