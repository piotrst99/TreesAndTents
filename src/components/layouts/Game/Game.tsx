import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allMaps } from "../../../assets/maps";
import { Board } from "../../../types/board";
import { BoardItems } from "../../../types/boardItems";
import MapBoard2 from "../../mapItems/createBoardMap";
import { createColumnNumbers } from "../../mapItems/createColumnNumbers";
import { createRowNumbers } from "../../mapItems/createRowNumbers";
import MapBoard from "../../mapItems/MapBoard";

export default function Game() {
    const { boardSize, levelName } = useParams();
    const mapBoard: Board | undefined = allMaps.find(x=>x.key === boardSize)?.
        boards?.find(y=>y.nameLevel.toLowerCase().replace(' ','') === levelName);
    const [boardState, setBoardState] = useState<BoardItems[][] | undefined>(mapBoard?.startLevelState)

    useEffect(() => {
        console.clear();
        console.log(boardState);
    }, [boardState, setBoardState]);

    const changeBoardStateValue = (x: number, y: number, tileValue: BoardItems) => {
        console.log(x,y,tileValue);
        const newBoardState = boardState;
        if(!newBoardState){
            return;
        }
        newBoardState[x][y] = tileValue;
        console.log(newBoardState);
        setBoardState(newBoardState);
    };

    return (
        <>
            {mapBoard && (
                // <MapBoard board={mapBoard} />
                <Box sx={{display: 'flex'}}>
                    {createRowNumbers(mapBoard.rowValues)}
                    <Box>
                        {createColumnNumbers(mapBoard.columnValues)}
                        <MapBoard2 boardMap={boardState} changeBoardStateValue={changeBoardStateValue} />
                    </Box>
                </Box>
            )}
            {!mapBoard && (
                <Box>
                    Map not found!
                </Box>
            )}
        </>
    );
};
