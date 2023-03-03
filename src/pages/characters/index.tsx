import getCharacters from "#/features/character/getCharacters";

export async function getServierSideProps() {
    const characters = await getCharacters();
    return {
        props: {
            characters
        }
    }
}

export default function CharactersPage() {
    return (
        <div className="container mx-auto flex flex-col gap-3 px-3">
            <h1 className="text-3xl uppercase text-center">characters</h1>
        </div>
    )
}