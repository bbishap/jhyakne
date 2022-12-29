import { FormControl, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface Props {
  onChange: () => void;
  value: string;
  label: string;
}

export const DatePicker: React.FC<Props> = ({ onChange, value, label }) => {
  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label={label}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={onChange}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </FormControl>
  );
};
