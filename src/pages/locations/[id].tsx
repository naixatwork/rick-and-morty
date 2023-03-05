import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";



import getSSGRevalidateDuration from "#/features/cache/getSSGRevalidateDuration";
import CharacterCard from "#/features/character/CharacterCard/CharacterCard";
import { Character } from "#/features/character/character.type";
import getCharacter from "#/features/character/getCharacter";
import LocationCard from "#/features/location/LocationCard/LocationCard";
import getLocation from "#/features/location/getLocation";
import getCharacterEpisodes from "#/features/location/getLocationResidents";
import getLocationsList from "#/features/location/getLocationsList";
import { Location } from "#/features/location/location.type";
import extractUrlTail from "#/utils/extractUrlTail/extractUrlTail";



import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


export const getStaticPaths: GetStaticPaths = async () => {
    const locationsListResponse = await getLocationsList();

    return {
        paths: locationsListResponse.results.map((location) => ({
            params: {id: location.id.toString()},
        })),
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context;

    const location = await getLocation(params?.id as string);
    const residents = await getCharacterEpisodes(location.residents);

    if (!location) {
        return {
            redirect: {
                permanent: false,
                destination: "/locations",
            },
        };
    }

    return {
        props: {
            location,
            residents
        },
        revalidate: getSSGRevalidateDuration()
    };
};

type LocationPageProps = {
    location: Location;
    residents: Character[]
};

export default function CharacterPage({location, residents}: LocationPageProps) {
    const router = useRouter();
    const redirectToCharacterDetail = (character: Character) => {
        router.push(`/characters/${character.id}`);
    };
    return (
        <div className="container mx-auto flex flex-col gap-5 px-3">
            <div className="flex items-center justify-center gap-2">
                <h1 className="text-center text-3xl uppercase">
                    {location.name}
                </h1>
            </div>
            <LocationCard location={location}/>
            <h1 className="text-center text-3xl uppercase">residents</h1>
            <div className="flex flex-wrap gap-5">
                {location.residents.length > 0 &&
                    residents.map((character) => (
                        character && <CharacterCard
                            key={character.id}
                            character={character}
                            onDetailClick={redirectToCharacterDetail}
                            actionContent={
                                <div className="flex w-full justify-end gap-2 p-2">
                                    <Button
                                        variant="contained"
                                        endIcon={<MoreVertRoundedIcon/>}
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