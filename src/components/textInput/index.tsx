import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";

interface Props {
  label: string;
  variant?: "outlined" | "filled" | "standard";
  type?: "number" | "text" | "password";
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export const TextInput: React.FC<Props> = ({
  label,
  variant = "standard",
  onChange,
  type = "text",
}) => {
  return (
    <FormControl fullWidth variant={variant}>
      <TextField
        label={label}
        variant={variant}
        type={type}
        onChange={onChange}
      />
    </FormControl>
  );
};
