import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { boardSizes } from "../../../assets/boardSizes";
import { allMaps } from "../../../assets/maps";
import mapService from "../../../services/map.service";
import { selectLevelInputStyle } from "../../../styles/inputStyles";
import {
  levelListStyle,
  levelTileStyle,
  linkToLevelStyle,
} from "../../../styles/selectLevelStyles";
import { Board } from "../../../types/board";

export default function SelectLevel() {
  const [boardSize, setBoardSize] = useState<string>("5x5");
  const boards: Board[] | undefined = mapService.findMapBySize(boardSize)?.boards;

  // e type is any, because is from mui select box
  const handleSelectValue = useCallback((e: any) => {
    setBoardSize(e.target.value);
  }, []);

  const prepareLink = useCallback((boardSize: string, levelName: string) => {
    const lowerLevelName: string = levelName.toLowerCase().replace(" ", "");
    return `/${boardSize}/${lowerLevelName}`;
  }, []);

  const renderLevelList = () => {
    // TODO: correct type
    const levelList: any[] = [];

    boards?.map((item: Board) =>
        levelList.push(
          <Box sx={levelTileStyle} key={item.key}>
            <Link
              style={linkToLevelStyle}
              to={prepareLink(boardSize, item.nameLevel)}
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
