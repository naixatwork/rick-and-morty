import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";
import withEntity from "#/features/endpoint/entity/withEntity";
import getApiUrl from "#/features/endpoint/getApiUrl";
import withQuery from "#/features/endpoint/query/withQuery";
import { LocationQueries, Location } from "#/features/location/location.type";

export default async function getLocationsList(
    query?: LocationQueries,
): Promise<ResponseWithPagination<Location[]>> {
    const locationListResponse = await fetch(
        getApiUrl(withEntity("location"), withQuery(query || {})),
    );
    return await locationListResponse.json();
}