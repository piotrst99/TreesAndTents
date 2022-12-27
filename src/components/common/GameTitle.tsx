import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const gameTitleStyle = {
    color: "#DFDFDF",
    fontSize: "70px",
    fontWeight: 700,
    letterSpacing: "5px",
    textAlign: "center",
    margin: "15px 0",
}

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