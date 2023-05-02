import { Button } from "@mui/material";
import { buttonStyle } from "../../styles/buttonStyles";

export default function HomeButton() {
  return (
    <Button sx={buttonStyle} variant="contained" href="/">
      Home
    </Button>
  );
}
