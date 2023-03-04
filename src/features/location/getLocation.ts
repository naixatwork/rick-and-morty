import withEntity from "#/features/endpoint/entity/withEntity";
import getApiUrl from "#/features/endpoint/getApiUrl";
import { Location } from "#/features/location/location.type";

export default async function getLocation(
    locationId: string,
): Promise<Location> {
    const locationResponse = await fetch(
        getApiUrl(withEntity("location", locationId)),
    );
    return await locationResponse.json();
}