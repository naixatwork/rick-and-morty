import { NextApiHandler } from "next";

interface FavoriteCharacterRequest {
    favoriteCharacter: string;
}

const handler: NextApiHandler = (request, response) => {
    const {favoriteCharacter} = request.body as FavoriteCharacterRequest;
    const cookie = `favoriteCharacter=${favoriteCharacter}; path=/`

    response.setHeader('Set-Cookie', cookie);
    response.status(200).json({ cookie });
}

export default handler;