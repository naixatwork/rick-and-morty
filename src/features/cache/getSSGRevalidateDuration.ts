export default function getSSGRevalidateDuration(): number {
    const { NODE_ENV, VITE_SSG_REVALIDATE_DURATION } = process.env;

    if (NODE_ENV === "test") return parseInt(VITE_SSG_REVALIDATE_DURATION as string);

    return parseInt(process.env.SSG_REVALIDATE_DURATION as string);
}
