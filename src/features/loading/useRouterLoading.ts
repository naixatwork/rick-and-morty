import { useEffect, useState } from "react";

import { useRouter } from "next/router";

const useRouterLoading = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => setIsLoading(true);
    const finishLoading = () => setIsLoading(false);

    useEffect(() => {
        router.events.on("routeChangeStart", startLoading);

        router.events.on("routeChangeComplete", finishLoading);
        router.events.on("routeChangeError", finishLoading);

        return () => {
            router.events.off("routeChangeStart", startLoading);
            router.events.off("routeChangeComplete", finishLoading);
            router.events.off("routeChangeError", finishLoading);
        };
    }, [router.events]);

    return [isLoading];
};

export default useRouterLoading;
