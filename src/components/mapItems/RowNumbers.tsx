import Box from "@mui/material/Box";
import { numberTile } from "../../styles/tileStyles";

interface IColumnNumbers {
  rowValues: number[];
}

export default function RowNumbers(props: IColumnNumbers){
  const { rowValues } = props;

  return (
    <Box>
      <Box sx={[{...numberTile},{margin: '2px 2px'}]}></Box>
      {rowValues.map((item: number, index: number) => {
        return (
          <Box sx={[{...numberTile},{margin: '4px auto'}]} key={index}>
            {item}
          </Box>
        );
      })}
    </Box>
  );
};
