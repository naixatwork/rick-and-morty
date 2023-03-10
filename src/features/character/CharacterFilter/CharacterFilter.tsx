import { Controller, useForm } from "react-hook-form";

import { Character } from "#/features/character/character.type";
import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";
import PaginationFilter from "#/features/pagination/PaginationFilter";

import NavigateBeforeRounedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
    Button,
    Chip,
    IconButton,
    InputAdornment,
    TextField,
} from "@mui/material";

import GenderField from "../GenderField/GenderField";

export type CharacterFilterQuery = {
    name: string;
    gender: string;
    page: string;
};

type CharacterFilterProps = {
    defaultValues: Partial<CharacterFilterQuery>;
    submitCallBack: (values: CharacterFilterQuery) => void;
    pagination: ResponseWithPagination<Character>["info"];
};

export default function CharacterFilter({
    defaultValues,
    submitCallBack,
    pagination,
}: CharacterFilterProps) {
    const { handleSubmit, control, setValue, getValues, watch } =
        useForm<CharacterFilterQuery>({
            defaultValues: {
                name: defaultValues?.name || "",
                gender: defaultValues?.gender || "",
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
            <Controller
                name="gender"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <GenderField value={value} onChange={onChange} />
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
    );
}
