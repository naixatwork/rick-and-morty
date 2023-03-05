const getRangedString = (array: string[]): string => {
    const arrayCopy = [...array];
    return arrayCopy.join(",");
};
export default getRangedString