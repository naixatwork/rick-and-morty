import { Controller, useForm } from "react-hook-form";

import NavigateBeforeRounedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";

import GenderField from "../GenderField/GenderField";

export type CharacterFilterQuery = {
    name: string;
    gender: string;
    page: string;
};

type CharacterFilterProps = {
    defaultValues: Partial<CharacterFilterQuery>;
    submitCallBack: (values: CharacterFilterQuery) => void;
};

export default function CharacterFilter({
    defaultValues,
    submitCallBack,
}: CharacterFilterProps) {
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
                <div className="flex w-full items-center gap-2">
                    <p className="text-lg">
                        <span className="text-2xl font-bold">
                            {watch("page")}
                        </span>{" "}
                        / 12
                    </p>
                </div>
                <IconButton
                    disabled={parseInt(watch("page")) === 1}
                    onClick={decrementPage}
                >
                    <NavigateBeforeRounedIcon />
                </IconButton>
                <IconButton onClick={incrementPage}>
                    <NavigateNextRoundedIcon />
                </IconButton>
            </div>
            <Button variant="contained" type="submit">
                filter
            </Button>
        </form>
    );
}
