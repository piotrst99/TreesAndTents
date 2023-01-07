import Box from "@mui/material/Box";
import { numberTile } from "../../styles/tileStyles";

export const createColumnNumbers = (columnValues: number[]) => {
    return (
        <Box sx={{display: 'flex'}}>
            {columnValues.map((item: number, index: number) => {
                return <Box sx={numberTile} key={index}>
                    {item}
                </Box>
            })}
        </Box>
    );
};
