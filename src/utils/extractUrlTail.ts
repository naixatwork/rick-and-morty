import getLastElement from "#/utils/getLastElement";

const extractUrlTail = (url: string) =>
    getLastElement(url.split("/"));

export default extractUrlTail;