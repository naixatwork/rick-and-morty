import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";


export type GenderField = {
    onChange: () => void;
    value: any;
};

export default function GenderField(props: GenderField) {
    const genders = [
        {
            value: "",
            label: "none",
        },
        {
            value: "female",
            label: "female",
        },
        {
            value: "male",
            label: "male",
        },
        {
            value: "genderless",
            label: "genderless",
        },
        {
            value: "unknown",
            label: "unknown",
        },
    ];

    return (
        <FormControl>
            <InputLabel className="capitalize">gender</InputLabel>
            <Select
                defaultValue={props.value}
                className="w-full"
                label="Gender"
                value={props.value}
                onChange={props.onChange}
            >
                {genders.map((option) => (
                    <MenuItem
                        className="capitalize"
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}