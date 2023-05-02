import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { buttonsGroupInCenter } from "../../../styles/buttonStyles";
import { SvgIcon } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CheckIcon from "@mui/icons-material/Check";
import UndoIcon from "@mui/icons-material/Undo";
import AppTooltip from "../../common/AppTooltip";

interface IGameOptions {
  undoMove: () => void;
  resetMap: () => void;
  checkIsCorrect: () => void;
}

export default function GameOptions(props: IGameOptions) {
  const { undoMove, resetMap, checkIsCorrect } = props;

  return (
    <Box sx={buttonsGroupInCenter}>
      <AppTooltip title={"Reset"}>
        <Button onClick={resetMap} variant={"contained"} color={"error"}>
          <SvgIcon component={ReplayIcon} />
        </Button>
      </AppTooltip>
      <AppTooltip title={"Check"}>
        <Button
          onClick={checkIsCorrect}
          sx={{ marginLeft: 2, marginRight: 2 }}
          variant={"contained"}
          color={"success"}
        >
          <SvgIcon component={CheckIcon} />
        </Button>
      </AppTooltip>
      <AppTooltip title={"Undo"}>
        <Button onClick={undoMove} variant={"contained"} color={"warning"}>
          <SvgIcon component={UndoIcon} />
        </Button>
      </AppTooltip>
    </Box>
  );
}
