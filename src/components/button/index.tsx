import * as React from "react";
import Button from "@mui/material/Button";

interface Props {
  variant?: "text" | "contained" | "outlined";
  onClick: (e: React.MouseEvent) => void;
  label: string;
}

const ButtonComponent: React.FC<Props> = ({
  variant = "contained",
  onClick,
  label,
}) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
};

export { ButtonComponent };
