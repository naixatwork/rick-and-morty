import getCharacters from "#/features/character/getCharacters";
import {ResponseWithPagination} from "#/features/endpoint/endpoint.type";
import {Character} from "#/features/character/character.type";

type CharactersPageProps = {
    characters: ResponseWithPagination<Character[]>
}

export async function getServerSideProps() {
    const characters = await getCharacters();
    return {
        props: {
            characters
        }
    }
}

export default function CharactersPage({characters}: CharactersPageProps) {
    console.log(characters)
    return (
        <div className="container mx-auto flex flex-col gap-3 px-3">
            <h1 className="text-3xl uppercase text-center">characters</h1>
        </div>
    )
}