import Box from "@mui/material/Box";
import { useCallback, useEffect, useState } from "react";
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
  changeState?: Function | undefined;
}

export default function Tile(props: ITile) {
  const { value, isClickable, changeState, x, y } = props;
  const [tileState, setTileState] = useState<BoardItems>(value);

  useEffect(() => {
    setTileState(value);
  }, [value]);

  const handleClickTile = useCallback(() => {
    if (!isClickable || !changeState) {
      return;
    }

    const nextValue = tileState === 3 ? 1 : tileState + 1;
    setTileState(nextValue);
    changeState({ x: x, y: y, prevValue: tileState, tileValue: nextValue });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeState, tileState, isClickable]);

  const renderItem = useCallback(() => {
    if (tileState === 0) {
      return <Tree />;
    } else if (tileState === 1) {
      return <Ground />;
    } else if (tileState === 2) {
      return <Grass />;
    } else {
      return <Tent />;
    }
  }, [tileState]);

  return <Box onClick={handleClickTile}>{renderItem()}</Box>;
}
