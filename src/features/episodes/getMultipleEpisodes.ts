import withEntity from "#/features/endpoint/entity/withEntity";
import getApiUrl from "#/features/endpoint/getApiUrl";
import { Episode } from "#/features/episodes/episodes.type";
import getRangedString from "#/utils/getRangedString";

export default async function getMultipleEpisodes(
    ids: string[],
): Promise<Episode[]> {
    const charactersListResponse = await fetch(
        getApiUrl(withEntity("episode", getRangedString(ids))),
    );

    const episodes = await charactersListResponse.json();
    const episodesList = Array.isArray(episodes) ? episodes : [episodes];

    return await episodesList;
}