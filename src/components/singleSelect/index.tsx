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
  variant?: "standard" | "filled";
  label: string;
  menuItems: menuItem[];
}

export const SingleSelect: React.FC<Props> = ({
  variant = "standard",
  label,
  menuItems,
}) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl fullWidth variant={variant}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        value={age}
        label={label}
        onChange={handleChange}
        defaultValue={undefined}
      >
        {menuItems.map((data) => (
          <MenuItem value={data.value}>{data.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
