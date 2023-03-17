import { useCallback } from "react";
import { BoardItems } from "../types/boardItems";

export default function useGameValidate() {
  const checkChangedTile = useCallback(() => {}, []);

  const getCountOfTents = useCallback((boardState: BoardItems[][]): number => {
    return boardState
      .map(
        (x: BoardItems[]) => x.filter((item) => item === BoardItems.Tent).length
      )
      .reduce(
        (accumulator: BoardItems, currentValue: BoardItems) =>
          accumulator + currentValue,
        0
      );
  }, []);

  const checkIsLevelEnd = useCallback(
    (
      currentBoardState: BoardItems[][],
      correctLevelState: BoardItems[][]
    ): boolean => {
      if (correctLevelState.length === 0) {
        return false;
      }

      const countOfTentsIsCorrect =
        getCountOfTents(correctLevelState) ===
        getCountOfTents(currentBoardState);

      return (
        countOfTentsIsCorrect &&
        currentBoardState
          .map((x: BoardItems[], i: number) =>
            x.filter((item: BoardItems, j: number) =>
              (item === BoardItems.Tent || item === BoardItems.Tree) &&
              item === correctLevelState[i][j]
                ? true
                : correctLevelState[i][j] === BoardItems.None &&
                  (item === BoardItems.Grass || item === BoardItems.None)
            ).length === x.length
              ? 1
              : 0
          )
          .reduce(
            (accumulator: number, currentValue: number) =>
              accumulator + currentValue,
            0
          ) === currentBoardState[0].length
      );
    },
    [getCountOfTents]
  );

  const checkIsBoardCorrect = useCallback((): boolean => {
    return false;
  }, []);

  return {
    checkChangedTile,
    checkIsLevelEnd,
    checkIsBoardCorrect,
  };
}
