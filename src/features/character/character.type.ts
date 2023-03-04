export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: object;
    location: object;
    image: string;
    episode: object[];
    url: string;
    created: string;
};

export type CharactersQueries = {
    name?: string,
    gender?: string
}