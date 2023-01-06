import Box from "@mui/material/Box";
import Tile from "./Tile";

export default function MapBoard() {
    return (
        <>
            {/* TODO */}
            {/* load map from file in props */}
            <Box sx={{display:'flex'}}>
                <Tile value={1} isClickable={true} />
                <Tile value={1} isClickable={true} />
                <Tile value={0} isClickable={true} />
                <Tile value={1} isClickable={true} />
            </Box>
            <Box sx={{display:'flex'}}>
                <Tile value={0} isClickable={true} />
                <Tile value={1} isClickable={true} />
                <Tile value={1} isClickable={true} />
                <Tile value={1} isClickable={true} />
            </Box>
            <Box sx={{display:'flex'}}>
                <Tile value={0} isClickable={true} />
                <Tile value={1} isClickable={true} />
                <Tile value={1} isClickable={true} />
                <Tile value={1} isClickable={true} />
            </Box>
            <Box sx={{display:'flex'}}>
                <Tile value={1} isClickable={true} />
                <Tile value={0} isClickable={true} />
                <Tile value={1} isClickable={true} />
                <Tile value={1} isClickable={true} />
            </Box>
        </>
    );
};
