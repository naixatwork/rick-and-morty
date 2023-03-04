import {Controller, useForm} from "react-hook-form";

import { CharacterFilterQuery } from "#/features/character/CharacterFilter/CharacterFilter";
import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";
import { Location } from "#/features/location/location.type";
import {Button, InputAdornment, TextField} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PaginationFilter from "#/features/pagination/PaginationFilter";

export type LocationFilterQuery = {
    name: string;
    page: string;
};

type LocationFilterProps = {
    defaultValues: Partial<LocationFilterQuery>;
    submitCallBack: (values: LocationFilterQuery) => void;
    pagination: ResponseWithPagination<Location>["info"];
};

export default function LocationFilter({
    defaultValues,
    submitCallBack,
    pagination,
}: LocationFilterProps) {
    const { handleSubmit, control, setValue, getValues, watch } =
        useForm<LocationFilterQuery>({
            defaultValues: {
                name: defaultValues?.name || "",
                page: defaultValues?.page || "1",
            },
        });

    const incrementPage = (newPage: string) => {
        setValue("page", newPage);
        submitCallBack(getValues());
    };
    const decrementPage = (newPage: string) => {
        setValue("page", newPage);
        submitCallBack(getValues());
    };

    return (
        <form
            className="flex w-full flex-col gap-3"
            onSubmit={handleSubmit(submitCallBack)}
        >
            <Controller
                name="name"
                control={control}
                render={({ field: fieldProps }) => (
                    <TextField
                        {...fieldProps}
                        className="w-full"
                        label="Name"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchRoundedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
            <PaginationFilter
                page={watch("page")}
                pagination={pagination}
                onIncrementClick={incrementPage}
                onDecrementClick={decrementPage}
            />
            <Button variant="contained" type="submit">
                filter
            </Button>
        </form>
    )
}
