import Box from "@mui/material/Box";
import { numberTile } from "../../styles/tileStyles";

interface IColumnNumbers {
  columnValues: number[];
}

export default function ColumnNumbers(props: IColumnNumbers) {
  const { columnValues } = props;

  return (
    <Box sx={{ display: "flex" }}>
      {columnValues.map((item: number, index: number) => {
        return (
          <Box sx={numberTile} key={index}>
            {item}
          </Box>
        );
      })}
    </Box>
  );
}
