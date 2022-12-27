import { Box } from "@mui/material";
import { buttonsGroupInNav } from "../../styles/buttonStyles";
import CreateMapButton from "./CreateMapButton";
import LoadMapButton from "./LoadMapButton";
import SelectLevelButtom from "./SelectLevelButtom";

export default function NavButtons() {
    return (
        <Box sx={buttonsGroupInNav}>
            <SelectLevelButtom />
            <CreateMapButton />
            <LoadMapButton />
        </Box>
    );
}