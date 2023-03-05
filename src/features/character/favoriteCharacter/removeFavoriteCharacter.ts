const setFavoriteCharacter = (
    callback: (response: any) => void = () => {},
) => {
    fetch("/api/removeFavoriteCharacter", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((response) => {
            callback(response);
        });
};

export default setFavoriteCharacter;
