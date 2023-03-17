import { useCallback } from "react";
import mapService from "../services/map.service";
import { Board } from "../types/board";
import { BoardItems } from "../types/boardItems";

export default function useMapBoard() {
  const getMapBoard = useCallback(
    (
      boardSize: string | undefined,
      levelName: string | undefined
    ): Board | undefined => {
      return mapService.getBoard({
        boardSize: boardSize,
        levelName: levelName,
      });
    },
    []
  );

  const resetLevelMap = useCallback(
    (
      mapBoard: BoardItems[][],
      setBoardState: React.Dispatch<React.SetStateAction<BoardItems[][]>>
    ) => {
      setBoardState(mapBoard.map((row) => [...row]));
    },
    []
  );

  const fillEmptyTilesInEnd = useCallback(
    (
      mapBoard: BoardItems[][],
      setBoardState: React.Dispatch<React.SetStateAction<BoardItems[][]>>
    ) => {
      setBoardState(
        mapBoard.map((row) =>
          row.map((item: BoardItems) => {
            return item === BoardItems.None ? BoardItems.Grass : item;
          })
        )
      );
    },
    []
  );

  return {
    getMapBoard,
    resetLevelMap,
    fillEmptyTilesInEnd,
  };
}
