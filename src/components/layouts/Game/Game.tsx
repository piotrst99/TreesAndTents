import Box from "@mui/material/Box";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { Board } from "../../../types/board";
import { BoardItems } from "../../../types/boardItems";
import MapBoard from "../../mapItems/MapBoard";
import ColumnNumbers from "../../mapItems/ColumnNumbers";
import RowNumbers from "../../mapItems/RowNumbers";
import useMapBoard from "../../../hooks/useMapBoard";
import GameOptions from "./GameOptions";
import useGameLogic from "../../../hooks/useGameLogic";

export default function Game() {
  const { boardSize, levelName } = useParams();

  const { getMapBoard, resetLevelMap } = useMapBoard();
  const { addMove, undoMove } = useGameLogic();
  
  const mapBoard: Board | undefined = getMapBoard(boardSize, levelName);

  const [boardState, setBoardState] = useState<BoardItems[][]>(
    mapBoard?.startLevelState || [[]]
  );
  const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
  const [isLevelCorrect, setIsLevelCorrect] = useState<boolean>(true);

  const changeBoardStateValue = useCallback(
    (x: number, y: number, prevValue: BoardItems, tileValue: BoardItems) => {
      const newBoardState = [...boardState];
      if (!newBoardState) {
        return;
      }

      boardState[x][y] = tileValue;
      setBoardState(boardState);
      addMove({
        xPox: x,
        yPos: y,
        prevValue: prevValue,
        value: tileValue
      });
    },
    [addMove, boardState]
  );

  const handleUndoMoveClick = useCallback(() => {
    undoMove(setBoardState);
  }, [undoMove]);

  const handleResetMap = useCallback(() => {
    resetLevelMap(
      mapBoard?.startLevelState || [[]],
      setBoardState
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetLevelMap]);

  return (
    <>
      <GameOptions
        resetMap={handleResetMap}
        undoMove={handleUndoMoveClick} 
      />
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
