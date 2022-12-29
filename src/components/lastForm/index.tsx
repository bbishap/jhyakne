import { ChangeEvent } from "react";
import { FormData } from "../../pages/homepage";
import { TextInput } from "../textInput";

interface Props {
  handleTextChange: (e: ChangeEvent) => void;
  formData: FormData;
}

export const LastForm: React.FC<Props> = ({ handleTextChange, formData }) => {
  return (
    <div style={{ maxWidth: 300 }}>
      <TextInput
        value={formData.description}
        label="Description"
        name="description"
        onChange={handleTextChange}
      />
      <TextInput
        label="Location"
        name="location"
        onChange={handleTextChange}
        value={formData.location}
      />
      <TextInput
        label="Team"
        name="team"
        onChange={handleTextChange}
        value={formData.team}
      />
    </div>
  );
};
