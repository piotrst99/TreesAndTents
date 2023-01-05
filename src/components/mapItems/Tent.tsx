import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import { grassTileStyle, tileStyle, tentIconTileStyle } from "../../styles/tileStyles";

export default function Tent() {
    return (
        <Box 
            sx={[tileStyle, grassTileStyle]}
        >
            <FontAwesomeIcon 
                icon={faCampground} 
                style={tentIconTileStyle}
            />
        </Box>
    );
};
