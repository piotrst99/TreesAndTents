import { useCallback, useEffect, useState } from "react";
import { BoardItems } from "../types/boardItems";

interface IPlayerMove {
  xPox: number;
  yPos: number;
  prevValue: BoardItems;
  value: BoardItems;
}

export default function useGameLogic() {
  const [playerMoves, setPlayerMoves] = useState<IPlayerMove[]>([]);

  const undoMove = useCallback(
    (
      boardState: BoardItems[][] | undefined,
      setBoardState: React.Dispatch<React.SetStateAction<BoardItems[][] | undefined>>
    ) => {
      // TODO: correct
      const lastMove: IPlayerMove = playerMoves[playerMoves.length - 1];
      console.log(lastMove);
      if(!boardState || !lastMove){
        return;
      }
      const newBoardState = boardState;
      console.log(newBoardState)
      setTimeout(() => {
        newBoardState[lastMove.xPox][lastMove.yPos] = lastMove.prevValue;
        console.log(newBoardState)
        setBoardState(newBoardState);
      }, 2000);
      // setPlayerMoves(playerMoves.splice(0, playerMoves.length - 1));
      setPlayerMoves(playerMoves.splice(0, playerMoves.length - 1));
    },
    [playerMoves]
  );

  const addMove = useCallback(
    (move: IPlayerMove) => {
      setPlayerMoves([...playerMoves, move]);
    },
    [playerMoves]
  );

  useEffect(() => {
    console.log(playerMoves);
  }, [playerMoves]);

  return {
    undoMove,
    addMove,
  };
}
