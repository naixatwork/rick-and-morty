import { Character } from "#/features/character/character.type";
import getMultipleEpisodes from "#/features/episodes/getMultipleEpisodes";
import getLastElement from "#/utils/getLastElement";

export default async function getCharacterEpisodes(
    characterEpisodes: Character["episode"],
) {
    const characterUrlEpisodesCopy = [...characterEpisodes];

    const extractIdFromEpisodeUrl = (episodeUrl: string) =>
        getLastElement(episodeUrl.split("/"));
    const extractedIds = characterUrlEpisodesCopy.map(extractIdFromEpisodeUrl);
    return getMultipleEpisodes(extractedIds);
}