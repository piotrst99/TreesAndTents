import { useCallback } from "react";

export default function useGameValidate() {
  const checkChangedTile = useCallback(() => {

  }, []);

  const checkIsLevelEnd = useCallback((): boolean => {
    return false;
  }, []);

  const checkIsBoardCorrect = useCallback((): boolean => {
    return false;
  }, []);

  return {
    checkChangedTile,
    checkIsLevelEnd,
    checkIsBoardCorrect
  };
}