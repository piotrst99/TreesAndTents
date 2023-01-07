import Box from "@mui/material/Box";
import { numberTile } from "../../styles/tileStyles";

export const createRowNumbers = (rowValues: number[]) => {
    return (
        <Box sx={{marginTop: '50px'}}>
            {rowValues.map((item: number, index: number) => {
                return <Box sx={numberTile} key={index}>
                    {item}
                </Box>
            })}
        </Box>
    );
};
