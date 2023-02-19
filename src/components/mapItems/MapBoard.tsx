import Box from "@mui/material/Box";
import Tile from "./Tile";
import { BoardItems } from "../../types/boardItems";
import { useCallback } from "react";

interface IMapBoard {
  boardMap: BoardItems[][] | undefined;
  changeBoardStateValue: (
    x: number, 
    y: number, 
    tileValue: BoardItems
  ) => void;
};

export default function MapBoard(props: IMapBoard) {
  const { boardMap, changeBoardStateValue } = props;
  // const changeState = (x: number, y: number, tileValue: BoardItems) => {
  //     if(boardMap) boardMap[x][y] = tileValue;
  //     setBoardState(boardMap);
  // };

  const changeState = (x: number, y: number, tileValue: BoardItems) => {
    // if(boardMap) boardMap[x][y] = tileValue;
    // changeBoardStateValue(boardMap);
    changeBoardStateValue(x, y, tileValue);
  };

  return (
    <>
      {boardMap?.map((items: BoardItems[], iIndex: number) => {
        return (
          <Box sx={{ display: "flex" }} key={iIndex}>
            {items.map((item: BoardItems, jIndex: number) => {
              return (
                <Tile
                  key={jIndex}
                  value={item}
                  isClickable={item === 0 ? false : true}
                  x={iIndex}
                  y={jIndex}
                  changeState={changeState}
                />
              );
            })}
          </Box>
        );
      })}
    </>
  );
}
