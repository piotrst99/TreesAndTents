import Box from "@mui/material/Box";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Board } from "../../../types/board";
import { BoardItems } from "../../../types/boardItems";
import MapBoard from "../../mapItems/MapBoard";
import ColumnNumbers from "../../mapItems/ColumnNumbers";
import RowNumbers from "../../mapItems/RowNumbers";
import mapService from "../../../services/map.service";

export default function Game() {
  const { boardSize, levelName } = useParams();
  const mapBoard: Board | undefined = mapService.getBoard({
    boardSize: boardSize,
    levelName: levelName,
  });

  const [boardState, setBoardState] = useState<BoardItems[][] | undefined>(
    mapBoard?.startLevelState
  );

  useEffect(() => {
    // TODO: For test
    console.clear();
    console.log(boardState);
  }, [boardState, setBoardState]);

  const changeBoardStateValue = useCallback(
    (x: number, y: number, tileValue: BoardItems) => {
      // TODO: console for test - remove in future
      console.log(x, y, tileValue);
      const newBoardState = boardState;
      if (!newBoardState) {
        return;
      }
      newBoardState[x][y] = tileValue;
      // TODO: console for test - remove in future
      console.log(newBoardState);
      setBoardState(newBoardState);
    },
    [boardState]
  );

  return (
    <>
      {mapBoard && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <RowNumbers rowValues={mapBoard.rowValues} />
          <Box>
            <ColumnNumbers columnValues={mapBoard.columnValues} />
            <MapBoard
              boardMap={boardState}
              changeBoardStateValue={changeBoardStateValue}
            />
          </Box>
        </Box>
      )}
      {!mapBoard && <Box>Map not found!</Box>}
    </>
  );
}
