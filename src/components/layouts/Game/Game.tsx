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
import useGameValidate from "../../../hooks/useGameValidate";

interface IChangeBoardStateValue {
  x: number;
  y: number;
  prevValue: BoardItems;
  tileValue: BoardItems;
}

export default function Game() {
  const { boardSize, levelName } = useParams();

  const { getMapBoard, resetLevelMap, fillEmptyTilesInEnd } = useMapBoard();
  const { addMove, undoMove } = useGameLogic();
  const { checkIsLevelEnd } = useGameValidate();

  const mapBoard: Board | undefined = getMapBoard(boardSize, levelName);

  const [boardState, setBoardState] = useState<BoardItems[][]>(
    !mapBoard?.startLevelState
      ? [[]]
      : mapBoard?.startLevelState.map((row) => [...row])
  );
  const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
  const [isBoardCorrect, setIsBoardCorrect] = useState<boolean>(true);
  const [messageText, setMessageText] = useState<string>("");

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
      setIsGameEnd(
        checkIsLevelEnd(boardState, mapBoard?.correctLevelState || [])
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [addMove, boardState, modifyBoardState]
  );

  const handleUndoMoveClick = useCallback(() => {
    !isGameEnd && undoMove(setBoardState);
  }, [isGameEnd, undoMove]);

  const handleResetMap = useCallback(() => {
    resetLevelMap(mapBoard?.startLevelState || [[]], setBoardState);
    setIsGameEnd(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetLevelMap, setBoardState]);

  const handleMapCorrectness = useCallback(() => {
    // TODO: Implement function in future
    console.log('clicked handleMapCorrectness')
  }, []);

  useEffect(() => {
    isGameEnd && fillEmptyTilesInEnd(boardState, setBoardState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fillEmptyTilesInEnd, isGameEnd]);

  return (
    <>
      <GameOptions resetMap={handleResetMap} undoMove={handleUndoMoveClick} checkIsCorrect={handleMapCorrectness} />
      {mapBoard && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <RowNumbers rowValues={mapBoard.rowValues} />
          <Box>
            <ColumnNumbers columnValues={mapBoard.columnValues} />
            <MapBoard
              boardMap={boardState}
              changeBoardStateValue={changeBoardStateValue}
              isGameEnd={isGameEnd}
            />
          </Box>
        </Box>
      )}
      {/* TODO: Correct in future */}
      {!mapBoard && <Box>Map not found!</Box>}
      {/* TODO: Correct in future */}
      {isGameEnd && <Box>Level complete!</Box>}
    </>
  );
}
