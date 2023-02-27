import { Box } from "@mui/material";
import { buttonsGroupInCenter } from "../../styles/buttonStyles";
import CreateMapButton from "./CreateMapButton";
import LoadMapButton from "./LoadMapButton";
import SelectLevelButtom from "./SelectLevelButtom";

export default function NavButtons() {
  return (
    <Box sx={buttonsGroupInCenter}>
      <SelectLevelButtom />
      <CreateMapButton />
      <LoadMapButton />
    </Box>
  );
}
