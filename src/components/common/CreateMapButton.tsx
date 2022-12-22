import Button from "@mui/material/Button"
import { buttonStyle } from "../../styles/buttonStyles"

export default function CreateMapButton(){
    return (
        <Button 
            sx={buttonStyle} 
            variant="contained"
            href="/create-map"
        >
            Create map
        </Button>
    );
}