import Box from "@mui/material/Box";
import { Board } from "../../types/board";
import MapBoard2 from "./createBoardMap";
import { createColumnNumbers } from "./createColumnNumbers";
import { createRowNumbers } from "./createRowNumbers";

interface IMapBoard {
    board: Board;
};

export default function MapBoard(props: IMapBoard) {
    const { board } = props;
    return (
        <Box sx={{display: 'flex'}}>
            {createRowNumbers(board.rowValues)}
            <Box>
                {createColumnNumbers(board.columnValues)}
                {/* for test */}
                {/* {MapBoard2(board.startLevelState, null)} */}
            </Box>
        </Box>
    );
};
