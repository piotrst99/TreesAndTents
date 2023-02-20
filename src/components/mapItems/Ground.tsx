import Box from "@mui/material/Box";
import { groundTileHover, groundTileStyle, tileStyle } from "../../styles/tileStyles";

export default function Ground() {
  return (
    <Box sx={[tileStyle, groundTileStyle, groundTileHover]} />
  );
};