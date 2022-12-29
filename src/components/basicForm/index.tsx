import { SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent } from "react";
import { FormData } from "../../pages/homepage";
import { DatePicker } from "../datePicker";
import { MultipleSelect } from "../multipleSelect";
import { SingleSelect } from "../singleSelect";
import { TextInput } from "../textInput";

const genderSelectItems = [
  { label: "Male", value: "M" },
  { label: "Female", value: "F" },
];

const sportOptions = ["Cricket", "Football", "Hockey", "Skating"];

interface Props {
  handleTextChange: (e: ChangeEvent | SelectChangeEvent) => void;
  handleSelect: (e: SelectChangeEvent) => void;
  formData: FormData;
}

export const BasicForm: React.FC<Props> = ({
  handleTextChange,
  formData,
  handleSelect,
}) => {
  const handleChange = () => {};
  return (
    <div style={{ maxWidth: 300 }}>
      <TextInput
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleTextChange}
      />
      <MultipleSelect
        onSelect={handleSelect}
        value={formData.sport}
        name="sport"
        label="Sport"
        options={sportOptions}
      />
      <SingleSelect
        value={formData.gender}
        name="gender"
        label="Gender"
        onSelect={handleTextChange}
        menuItems={genderSelectItems}
      />
      <DatePicker
        label="Date of birth"
        value={formData.dob}
        onChange={handleChange}
      />
    </div>
  );
};
