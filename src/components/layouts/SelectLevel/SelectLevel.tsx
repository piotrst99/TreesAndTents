import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Link } from "react-router-dom";
import { boardSizes } from "../../../assets/boardSizes";
import { allMaps } from "../../../assets/maps";
import { selectLevelInputStyle } from "../../../styles/inputStyles";
import {
  levelListStyle,
  levelTileStyle,
  linkToLevelStyle,
} from "../../../styles/selectLevelStyles";
import { Board } from "../../../types/board";

export default function SelectLevel() {
  const [boardSize, setBoardSize] = useState<string>("5x5");

  const handleSelectValue = (e: any) => {
    setBoardSize(e.target.value);
  };

  const renderLevelList = () => {
    const levelList: any[] = [];

    allMaps
      .find((x) => x.key === boardSize)
      ?.boards?.map((item: Board) =>
        levelList.push(
          <Box sx={levelTileStyle} key={item.key}>
            <Link
              style={linkToLevelStyle}
              to={`/${boardSize}/${item.nameLevel
                .toLowerCase()
                .replace(" ", "")}`}
            >
              {item.nameLevel}
            </Link>
          </Box>
        )
      );

    return levelList;
  };

  return (
    <>
      <FormControl sx={selectLevelInputStyle}>
        <InputLabel id="board-size-label">Board size</InputLabel>
        <Select
          id="board-size-input"
          labelId="board-size-label"
          value={boardSize}
          label="Board size"
          onChange={handleSelectValue}
        >
          {boardSizes.map((x: string) => (
            <MenuItem key={x} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={levelListStyle}>{renderLevelList()}</Box>
    </>
  );
}
