import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { buttonsGroupInCenter } from "../../../styles/buttonStyles";

interface IGameOptions {
  undoMove: () => void;
  resetMap: () => void;
};

export default function GameOptions(props: IGameOptions) {
  const { undoMove, resetMap } = props;

  return (
    <Box sx={buttonsGroupInCenter}>
      <Button onClick={resetMap} variant="contained">Reset</Button>
      <Button variant="contained">Check</Button>
      <Button onClick={undoMove} variant="contained">Undo</Button>
    </Box>
  );
}
