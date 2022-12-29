import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface Props {
  options: string[];
  label: string;
  name: string;
  value: any;
  onSelect: (e: SelectChangeEvent) => void;
}

const MultipleSelect: React.FC<Props> = ({
  options,
  label,
  name,
  value,
  onSelect,
}) => {
  const theme = useTheme();

  return (
    <div>
      <FormControl fullWidth variant="filled">
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          variant="filled"
          label={label}
          multiple
          value={value}
          onChange={onSelect}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
        >
          {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, value, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export { MultipleSelect };
