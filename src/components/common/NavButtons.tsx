import { Grid } from "@mui/material";
import CreateMapButton from "./CreateMapButton";
import LoadMapButton from "./LoadMapButton";
import SelectLevelButtom from "./SelectLevelButtom";
import HomeButton from "./HomeButton";

export default function NavButtons() {
  return (
    <Grid
      sx={gridWrapperStyles}
      justifyContent={"center"}
      container
      spacing={2}
    >
      <Grid item>
        <HomeButton />
      </Grid>
      <Grid item>
        <SelectLevelButtom />
      </Grid>
      <Grid item>
        <CreateMapButton />
      </Grid>
      <Grid item>
        <LoadMapButton />
      </Grid>
    </Grid>
  );
}

const gridWrapperStyles = {
  flexGrow: 1,
  marginTop: 0,
};
