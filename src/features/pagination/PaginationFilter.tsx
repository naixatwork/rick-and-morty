import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";

import NavigateBeforeRoundIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { Chip, IconButton } from "@mui/material";

export type PaginationFilterProps = {
    page: string;
    pagination: ResponseWithPagination<any>["info"];
    onIncrementClick: (newPage: string) => void;
    onDecrementClick: (newPage: string) => void;
};

export default function PaginationFilter({
    page,
    pagination,
    onIncrementClick,
    onDecrementClick,
}: PaginationFilterProps) {
    const incrementPage = () => {
        const pageNumber = parseInt(page);
        const incrementedPageNumber = pageNumber + 1;
        onIncrementClick(incrementedPageNumber.toString());
    };
    const decrementPage = () => {
        const pageNumber = parseInt(page);
        const decrementedPageNumber = pageNumber - 1;
        onDecrementClick(decrementedPageNumber.toString())
    };

    return (
        <div className="flex w-full gap-3">
            <div className="flex w-full items-center gap-2 text-lg">
                <span className="text-2xl font-bold">{page} / {pagination.pages}</span>
                <Chip label={`total: ${pagination.count}`} />
            </div>
            <IconButton data-testid="prevPage" disabled={!pagination.prev} onClick={decrementPage}>
                <NavigateBeforeRoundIcon />
            </IconButton>
            <IconButton data-testid="nextPage" disabled={!pagination.next} onClick={incrementPage}>
                <NavigateNextRoundedIcon />
            </IconButton>
        </div>
    );
}
