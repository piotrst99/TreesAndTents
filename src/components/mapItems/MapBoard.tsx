import Box from "@mui/material/Box";
import Tile from "./Tile";
import { BoardItems } from "../../types/boardItems";

interface IMapBoard {
  boardMap: BoardItems[][];
  changeBoardStateValue: (
    x: number,
    y: number,
    prevValue: BoardItems,
    tileValue: BoardItems
  ) => void;
}

export default function MapBoard(props: IMapBoard) {
  const { boardMap, changeBoardStateValue } = props;

  return (
    <>
      {boardMap?.map((items: BoardItems[], iIndex: number) => (
        <Box sx={{ display: "flex" }} key={iIndex}>
          {items.map((item: BoardItems, jIndex: number) => (
            <Tile
              key={jIndex}
              value={item}
              isClickable={item === 0 ? false : true}
              x={iIndex}
              y={jIndex}
              changeState={changeBoardStateValue}
            />
          ))}
        </Box>
      ))}
    </>
  );
}