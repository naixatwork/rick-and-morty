import { Character } from "#/features/character/character.type";

const setFavoriteCharacter = (
    character: Character,
    callback: (response: any) => void = () => {},
) => {
    fetch("/api/saveFavoriteCharacter", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ favoriteCharacter: character.name }),
    })
        .then((res) => res.json())
        .then((response) => {
            callback(response);
        });
};

export default setFavoriteCharacter;
