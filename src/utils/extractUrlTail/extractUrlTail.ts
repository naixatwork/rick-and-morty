import getLastElement from "#/utils/getLastElement/getLastElement";

const extractUrlTail = (url: string) =>
    getLastElement(url.split("/"));

export default extractUrlTail;