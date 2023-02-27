import Box from "@mui/material/Box";
import { useCallback, useEffect, useState } from "react";
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

  const { getMapBoard } = useMapBoard();
  const { addMove, undoMove } = useGameLogic();
  
  const mapBoard: Board | undefined = getMapBoard(boardSize, levelName);

  const [boardState, setBoardState] = useState<BoardItems[][] | undefined>(
    mapBoard?.startLevelState
  );
  const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
  const [isLevelCorrect, setIsLevelCorrect] = useState<boolean>(true);

  const changeBoardStateValue = useCallback(
    (x: number, y: number, prevValue: BoardItems, tileValue: BoardItems) => {
      const newBoardState = boardState;
      if (!newBoardState) {
        return;
      }

      newBoardState[x][y] = tileValue;
      // TODO: console for test - remove in future
      // console.log(x, y, tileValue);
      // console.log(newBoardState);
      setBoardState(newBoardState);
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
    undoMove(boardState, setBoardState);
  }, [boardState, undoMove]);

  // TODO: for test
  useEffect(() => {
    console.log(boardState);
  }, [boardState]);

  return (
    <>
      <GameOptions
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
