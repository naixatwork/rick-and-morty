import { Controller, useForm } from "react-hook-form";

import { Character } from "#/features/character/character.type";
import { ResponseWithPagination } from "#/features/endpoint/endpoint.type";

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
    console.log(pagination);
    const { handleSubmit, control, setValue, getValues, watch } =
        useForm<CharacterFilterQuery>({
            defaultValues: {
                name: defaultValues?.name || "",
                gender: defaultValues?.gender || "",
                page: defaultValues?.page || "1",
            },
        });

    const incrementPage = () => {
        const pageNumber = parseInt(getValues("page"));
        const incrementedPageNumber = pageNumber + 1;
        setValue("page", incrementedPageNumber.toString());
        submitCallBack(getValues());
    };
    const decrementPage = () => {
        const pageNumber = parseInt(getValues("page"));
        const decrementedPageNumber = pageNumber - 1;
        setValue("page", decrementedPageNumber.toString());
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
            <div className="flex w-full gap-3">
                <div className="flex w-full items-center gap-2 text-lg">
                    <span className="text-2xl font-bold">{watch("page")}</span>{" "}
                    / {pagination.pages}
                    <Chip label={`total: ${pagination.count}`} />
                </div>
                <IconButton disabled={!pagination.prev} onClick={decrementPage}>
                    <NavigateBeforeRounedIcon />
                </IconButton>
                <IconButton disabled={!pagination.next} onClick={incrementPage}>
                    <NavigateNextRoundedIcon />
                </IconButton>
            </div>
            <Button variant="contained" type="submit">
                filter
            </Button>
        </form>
    );
}
