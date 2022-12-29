import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface menuItem {
  label: string;
  value: string;
}

interface Props {
  variant?: "standard" | "filled" | "outlined";
  label: string;
  menuItems: menuItem[];
  name: string;
  onSelect: (e: SelectChangeEvent) => void;
  value: string;
}

export const SingleSelect: React.FC<Props> = ({
  variant = "outlined",
  label,
  menuItems,
  name,
  value,
  onSelect,
}) => {
  return (
    <FormControl fullWidth variant={variant}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        name={name}
        value={value}
        label={label}
        onChange={onSelect}
        defaultValue={undefined}
      >
        {menuItems.map((data) => (
          <MenuItem value={data.value} key={data.value}>
            {data.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
