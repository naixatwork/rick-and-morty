export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {name: string, url: string};
    location: {name: string, url: string};
    image: string;
    episode: object[];
    url: string;
    created: string;
};

export type CharactersQueries = {
    name?: string,
    gender?: string
}