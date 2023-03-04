export default function getApiUrl(...append: string[]): string {
    const { NODE_ENV, VITE_RICK_AND_MORTY_API } = process.env;

    if (NODE_ENV === "test") return VITE_RICK_AND_MORTY_API as string;

    const appendCopy = [...append];
    const appendString = appendCopy.join("");
    return process.env.RICK_AND_MORTY_API + appendString;
}
