import { faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import { tileStyle, grassTileStyle, treeIconTileStyle } from "../../styles/tileStyles";

export default function Tree() {
    return (
        <Box 
            sx={[tileStyle, grassTileStyle]}
        > 
            <FontAwesomeIcon 
                icon={faTree}
                style={treeIconTileStyle} 
            />
        </Box>
    );
};
