export type EndpointQueries = Record<string, any> & {page: string};

export default function withQuery(queries: Partial<EndpointQueries>): string {
    const queriesCopy = { ...queries };
    const queryKeys = Object.keys(queriesCopy);
    const parsedQueries = queryKeys.map(
        (key) => `${key}=${(queries as any)[key]}`,
    );
    const queryString = `/?${parsedQueries.join("&")}`;
    return queryString;
}
