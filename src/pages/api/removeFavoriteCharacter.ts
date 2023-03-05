import { NextApiHandler } from "next";

const handler: NextApiHandler = (request, response) => {
    const cookie = `favoriteCharacter=; path=/; Max-Age=-1`;

    response.setHeader("Set-Cookie", cookie);
    response.status(200).json({ cookie });
};

export default handler;
