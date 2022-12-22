import Button from "@mui/material/Button";
import { buttonStyle } from "../../styles/buttonStyles";

export default function SelectLevelButtom(){
    return (
        <Button 
            sx={buttonStyle} 
            variant="contained"
            href="/select-level"
        >
            Select level
        </Button>
    );
}