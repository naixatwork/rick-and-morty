export default function endpoint(append: string = ""): string {
    const {NODE_ENV, VITE_RICK_AND_MORTY_API} = process.env;

    if (NODE_ENV === "test") return VITE_RICK_AND_MORTY_API as string;
    return process.env.RICK_AND_MORTY_API + append;
}