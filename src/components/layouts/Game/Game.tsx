import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { allMaps } from "../../../assets/maps";
import { Board } from "../../../types/board";
import MapBoard from "../../mapItems/MapBoard";

export default function Game() {
    const { boardSize, levelName } = useParams();
    const mapBoard: Board | undefined = allMaps.find(x=>x.key === boardSize)?.
        boards?.find(y=>y.nameLevel.toLowerCase().replace(' ','') === levelName);

    return (
        <>
            {mapBoard && (
                <>
                    <Box>
                        {`${boardSize} - ${mapBoard.nameLevel}`}
                    </Box>
                    <MapBoard />
                </>
            )}
            {!mapBoard && (
                <Box>
                    Map not found!
                </Box>
            )}
        </>
    );
};
