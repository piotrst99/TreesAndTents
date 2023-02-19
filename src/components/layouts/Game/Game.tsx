import Box from "@mui/material/Box";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allMaps } from "../../../assets/maps";
import { Board } from "../../../types/board";
import { BoardItems } from "../../../types/boardItems";
import MapBoard from "../../mapItems/MapBoard";
import ColumnNumbers from "../../mapItems/ColumnNumbers";
import RowNumbers from "../../mapItems/RowNumbers";

export default function Game() {
  const { boardSize, levelName } = useParams();
  const mapBoard: Board | undefined = allMaps
    .find((x) => x.key === boardSize)
    ?.boards?.find(
      (y) => y.nameLevel.toLowerCase().replace(" ", "") === levelName
    );
  const [boardState, setBoardState] = useState<BoardItems[][] | undefined>(
    mapBoard?.startLevelState
  );

  useEffect(() => {
    console.clear();
    console.log(boardState);
  }, [boardState, setBoardState]);

  const changeBoardStateValue = useCallback((
    x: number,
    y: number,
    tileValue: BoardItems
  ) => {
    console.log(x, y, tileValue);
    const newBoardState = boardState;
    if (!newBoardState) {
      return;
    }
    newBoardState[x][y] = tileValue;
    console.log(newBoardState);
    setBoardState(newBoardState);
  }, [boardState]);

  return (
    <>
      {mapBoard && (
        <Box sx={{ display: "flex" }}>
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
