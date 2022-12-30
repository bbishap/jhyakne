import { ChangeEvent } from "react";
import { FormData } from "../../pages/homepage";
import { TextInput } from "../textInput";

interface Props {
  handleTextChange: (e: ChangeEvent) => void;
  formData: FormData;
}

export const LastForm: React.FC<Props> = ({ handleTextChange, formData }) => {
  return (
    <>
      <div style={{ margin: "12px 0" }}>
        <TextInput
          value={formData.description}
          label="Description"
          name="description"
          onChange={handleTextChange}
        />
      </div>
      <div style={{ margin: "12px 0" }}>
        <TextInput
          label="Location"
          name="location"
          onChange={handleTextChange}
          value={formData.location}
        />
      </div>
      <div style={{ margin: "12px 0" }}>
        <TextInput
          label="Team"
          name="team"
          onChange={handleTextChange}
          value={formData.team}
        />
      </div>
    </>
  );
};
