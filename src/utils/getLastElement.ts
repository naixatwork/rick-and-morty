export default function getLastElement<T>(array: T[]): T {
    const arrayCopy = [...array];
    return arrayCopy[arrayCopy.length - 1];
}
