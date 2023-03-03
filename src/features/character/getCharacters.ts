import endpoint from "#/features/endpoint/endpoint";

export default async function getCharacters() {
    console.log(endpoint("character"));
    const charactersResult = await fetch(endpoint("character"));
    const characters = await charactersResult.json();
    console.log(characters);
    return characters;
}
