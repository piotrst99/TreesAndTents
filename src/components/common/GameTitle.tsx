import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { gameTitleStyle } from "../../styles/textStyles";

export default function GameTitle(){
    return (
        <Box sx={{textAlign: "center"}}>
            <Link 
                href="/"
                underline={"none"}
                sx={gameTitleStyle}
            >
                Trees and Tents
            </Link>
        </Box>
    );
}