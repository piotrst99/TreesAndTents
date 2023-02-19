import Box from "@mui/material/Box";
import { useState } from "react";
import { BoardItems } from "../../types/boardItems";
import Tree from "./Tree";
import Ground from "./Ground";
import Grass from "./Grass";
import Tent from "./Tent";

interface ITile {
  value: BoardItems;
  isClickable?: boolean;
  x?: number;
  y?: number;
  changeState?: any;
}

export default function Tile(props: ITile) {
  const { value, isClickable, changeState, x, y } = props;
  const [tileState, setTileState] = useState<BoardItems>(value);

  const onClick = () => {
    if (!isClickable) {
      return;
    }

    console.log(tileState);

    if (tileState === 3) {
      setTileState(1);
    } else if (tileState > 0) {
      setTileState(tileState + 1);
    }

    // TODO
    // verify why value is preview ?
    changeState(x, y, tileState);
  };

  const renderItem = () => {
    if (tileState === 0) {
      return <Tree />;
    } else if (tileState === 1) {
      return <Ground />;
    } else if (tileState === 2) {
      return <Grass />;
    } else {
      return <Tent />;
    }
  };

  return <Box onClick={onClick}>{renderItem()}</Box>;
}
