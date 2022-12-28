import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import { selectLevelInputStyle } from "../../../styles/inputStyles";

export default function SelectLevel() {
    const [boardSize, setBoardSize] = useState<string>("5x5");
    const boardSizes = [
        "5x5", "6x6", "7x7"
    ];

    // for test
    const levelsListForTest:{[key: string]: string[]} = {
        "5x5" : [
            "Level 1",
            "Level 2",
            "Level 3",
            "Level 4",
        ],
        "6x6" : [
            "Level 1",
            "Level 2",
            "Level 3",
        ],
        "7x7" : [
            "Level 1",
            "Level 2",
        ]
    };

    // for test
    // useEffect(() => {
    //     //console.log(levelsListForTest[boardSize]);
    // }, [boardSize]);

    const handleSelectValue = (e: any) => {
        setBoardSize(e.target.value);
    };

    // for test
    const renderLevelListForTest = () => {
        const levelList: any[]= [];
        {levelsListForTest[boardSize].map((x: string)=>(
            levelList.push(<div key={x}>{x}</div>)
        ))}
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
                        <MenuItem key={x} value={x}>{x}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {/* for test */}
            <Box>{renderLevelListForTest()}</Box>
        </>
    );
}