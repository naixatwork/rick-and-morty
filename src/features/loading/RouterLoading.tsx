import useRouterLoading from "#/features/loading/useRouterLoading";

import { LinearProgress } from "@mui/material";

const RouterLoading = () => {
    const [isLoading] = useRouterLoading();

    return <div className="w-full">{isLoading && <LinearProgress />}</div>;
};

export default RouterLoading;
