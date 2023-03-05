import { Character } from "#/features/character/character.type";
import getMultipleEpisodes from "#/features/episodes/getMultipleEpisodes";
import extractUrlTail from "#/utils/extractUrlTail/extractUrlTail";

export default async function getCharacterEpisodes(
    episodeUrls: Character["episode"],
) {
    const episodeUrlsCopy = [...episodeUrls];

    const extractedIds = episodeUrlsCopy.map(extractUrlTail);
    return getMultipleEpisodes(extractedIds);
}