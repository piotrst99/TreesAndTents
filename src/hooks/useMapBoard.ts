import { useCallback } from "react";
import mapService from "../services/map.service";
import { Board } from "../types/board";

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

  const resetLevelMap = useCallback(() => {

  }, []);

  const fillEmptyTilesInEnd = useCallback(() => {

  }, []);

  return {
    getMapBoard,
    resetLevelMap,
    fillEmptyTilesInEnd
  };
}
