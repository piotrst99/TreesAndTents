import Box from "@mui/material/Box";
import { grassTileHover, grassTileStyle, tileStyle } from "../../styles/tileStyles";

export default function Grass() {
  return(
    <Box sx={[tileStyle, grassTileStyle, grassTileHover]} />
  );
};
