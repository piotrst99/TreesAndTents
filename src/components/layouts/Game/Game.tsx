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

interface IChangeBoardStateValue {
  x: number;
  y: number;
  prevValue: BoardItems;
  tileValue: BoardItems;
}

export default function Game() {
  const { boardSize, levelName } = useParams();

  const { getMapBoard, resetLevelMap } = useMapBoard();
  const { addMove, undoMove } = useGameLogic();

  const mapBoard: Board | undefined = getMapBoard(boardSize, levelName);

  const [boardState, setBoardState] = useState<BoardItems[][]>(
    !mapBoard?.startLevelState
      ? [[]]
      : mapBoard?.startLevelState.map((row) => [...row])
  );
  const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
  const [isBoardCorrect, setIsBoardCorrect] = useState<boolean>(true);

  const modifyBoardState = useCallback(
    (valueFromTile: IChangeBoardStateValue, prevBoardState: BoardItems[][]) => {
      const newBoardState = [...prevBoardState];
      if (!newBoardState) {
        return;
      }

      newBoardState[valueFromTile.x][valueFromTile.y] = valueFromTile.tileValue;
      setBoardState(newBoardState);
    },
    []
  );

  const changeBoardStateValue = useCallback(
    (arg: IChangeBoardStateValue) => {
      modifyBoardState(arg, boardState);

      addMove({
        xPox: arg.x,
        yPos: arg.y,
        prevValue: arg.prevValue,
        value: arg.tileValue,
      });
    },
    [addMove, boardState, modifyBoardState]
  );

  const handleUndoMoveClick = useCallback(() => {
    undoMove(setBoardState);
  }, [undoMove]);

  const handleResetMap = useCallback(() => {
    resetLevelMap(mapBoard?.startLevelState || [[]], setBoardState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetLevelMap]);

  return (
    <>
      <GameOptions resetMap={handleResetMap} undoMove={handleUndoMoveClick} />
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
