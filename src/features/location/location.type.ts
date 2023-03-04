export type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
};

export type LocationQueries = {
    name?: string,
}