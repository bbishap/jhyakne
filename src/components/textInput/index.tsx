import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";

interface Props {
  label: string;
  name: string;
  value: string | number;
  variant?: "outlined" | "filled" | "standard";
  type?: "number" | "text" | "password";
  onChange: (e: ChangeEvent) => void;
}

export const TextInput: React.FC<Props> = ({
  label,
  variant = "outlined",
  onChange,
  type = "text",
  name,
  value,
}) => {
  return (
    <FormControl fullWidth variant={variant}>
      <TextField
        value={value}
        name={name}
        label={label}
        variant={variant}
        type={type}
        onChange={onChange}
      />
    </FormControl>
  );
};
