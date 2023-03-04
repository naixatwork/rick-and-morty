import {useRouter} from "next/router";

export default function CharacterPage() {
    const router = useRouter();
    console.log(router.query)

    return (
        <div>lol</div>
    )
}