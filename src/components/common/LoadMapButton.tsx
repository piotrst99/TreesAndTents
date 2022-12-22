import Button from "@mui/material/Button";
import { buttonStyle } from "../../styles/buttonStyles";

export default function LoadMapButton() {
    return (
        <Button 
            sx={buttonStyle} 
            variant="contained"
            href="/load-map"
        >
            Load map
        </Button>
    );
}