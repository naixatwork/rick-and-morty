import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { CharacterFilterQuery } from "#/features/character/CharacterFilter/CharacterFilter";
import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";
import withQuery from "#/features/endpoint/query/withQuery";
import LocationCard from "#/features/location/LocationCard/LocationCard";
import LocationFilter, {
    LocationFilterQuery,
} from "#/features/location/LocationFilter/LocationFilter";
import getLocationsList from "#/features/location/getLocationsList";
import { Location } from "#/features/location/location.type";

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { Button } from "@mui/material";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const locationsListResponse = await getLocationsList(query);

    if (locationsListResponse.error) {
        return {
            redirect: {
                destination: "/locations",
                permanent: false,
            }
        }
    }

    return {
        props: {
            locationsListResponse,
            query,
        },
    };
};

type LocationListPageProps = {
    locationsListResponse: ResponseWithPagination<Location[]>;
    query: CharacterFilterQuery;
};

export default function LocationListPage({
    locationsListResponse,
    query,
}: LocationListPageProps) {
    const router = useRouter();

    const filterLocations = (query: LocationFilterQuery) => {
        router.push("/locations" + withQuery(query));
    };

    const redirectToLocationDetail = (location: Location) => {
        router.push(`/locations/${location.id}`);
    };

    return (
        <div className="container mx-auto flex flex-col gap-5 px-3">
            <h1 className="text-center text-3xl uppercase">locations</h1>
            <LocationFilter
                pagination={locationsListResponse.info}
                defaultValues={query}
                submitCallBack={filterLocations}
            />
            {locationsListResponse.error && (
                <div className="w-full rounded bg-red-500 p-3">
                    <p>{locationsListResponse.error}</p>
                </div>
            )}
            <div className="flex flex-wrap gap-5">
                {locationsListResponse.results &&
                    locationsListResponse.results.map((location) => (
                        <LocationCard
                            key={location.id}
                            location={location}
                            onDetailClick={redirectToLocationDetail}
                            actionContent={
                                <div className="flex w-full justify-end gap-2 p-2">
                                    <Button
                                        variant="contained"
                                        endIcon={<MoreVertRoundedIcon />}
                                    >
                                        details
                                    </Button>
                                </div>
                            }
                        />
                    ))}
            </div>
        </div>
    );
}