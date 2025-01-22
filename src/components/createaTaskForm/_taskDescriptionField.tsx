import { TextField } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { ITextField } from "./interfaces/ITextField";


export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
    const { onChange = (e) => console.log(e), 
        disabled = false} = props;
    return <TextField
    id="description"
    label="description"
    placeholder="Description"
    variant="outlined"
    size="small"
    name="description"
    multiline
    rows={4}
    fullWidth
    onChange = {onChange}
    disabled = {disabled}
    />
};