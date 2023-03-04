import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";
import withEntity from "#/features/endpoint/entity/withEntity";
import getApiUrl from "#/features/endpoint/getApiUrl";
import { Episode } from "#/features/episodes/episodes.type";

export default async function getMultipleEpisodes(
    ids: string[],
): Promise<ResponseWithPagination<Episode[]>> {
    const rangedIds = ids.join(",");
    const charactersListResponse = await fetch(
        getApiUrl(withEntity("episode", rangedIds)),
    );
    return await charactersListResponse.json();
}