import { useCallback, useState } from "react";
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
    (setBoardState: React.Dispatch<React.SetStateAction<BoardItems[][]>>) => {
      const lastMove = playerMoves.at(-1);
      if (!lastMove || playerMoves.length === 0) {
        // TODO: Disable undo move button using redux
        return;
      }

      setBoardState((prev) =>
        prev.map((row, index) => {
          if (index === lastMove.xPox) {
            row[lastMove.yPos] = lastMove.prevValue;
          }
          return row;
        })
      );

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

  return {
    undoMove,
    addMove,
  };
}
