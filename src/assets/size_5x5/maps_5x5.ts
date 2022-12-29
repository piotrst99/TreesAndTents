import { Board } from "../../types/board";
import { level1_5x5 } from "./level1_5x5";

export const mapsFor_5x5: Board[] = [
    level1_5x5,
    {
        key: "lvl_2",
        nameLevel: "Level 2",
        startLevelState: [
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1],
            [1, 0, 0, 1, 1]
        ],
        correctLevelState: [
            [1, 0, 3, 0, 3],
            [1, 1, 1, 1, 1],
            [1, 3, 1, 1, 1],
            [1, 0, 1, 1, 1],
            [3, 0, 0, 3, 1]
        ],
        columnValues: [1, 1, 1, 1, 1],
        rowValues: [2, 0, 1, 0, 2]
    },
    {
        key: "lvl_3",
        nameLevel: "Level 3",
        startLevelState: [
            [0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [1, 1, 0, 1, 1],
            [1, 1, 1, 0, 1]
        ],
        correctLevelState: [
            [0, 3, 1, 1, 1],
            [1, 1, 1, 1, 3],
            [0, 1, 3, 1, 0],
            [3, 1, 0, 1, 1],
            [1, 1, 3, 0, 1]
        ],
        columnValues: [1, 1, 2, 0, 1],
        rowValues: [1, 1, 1, 1, 1]
    },
    {
        key: "lvl_4",
        nameLevel: "Level 4",
        startLevelState: [
            [1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1],
            [1, 1, 0, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0]
        ],
        correctLevelState: [
            [1, 1, 3, 0, 0],
            [0, 1, 1, 1, 3],
            [3, 1, 0, 1, 1],
            [1, 1, 3, 1, 3],
            [1, 1, 1, 1, 0]
        ],
        columnValues: [1, 0, 2, 0, 2],
        rowValues: [1, 1, 1, 2, 0]
    },
    {
        key: "lvl_5",
        nameLevel: "Level 5",
        startLevelState: [
            [1, 0, 1, 1, 1],
            [1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1],
            [0, 1, 1, 1, 0]
        ],
        correctLevelState: [
            [3, 0, 1, 1, 1],
            [1, 1, 1, 1, 0],
            [1, 3, 1, 1, 3],
            [1, 0, 1, 1, 1],
            [0, 3, 1, 3, 0]
        ],
        columnValues: [1, 2, 0, 1, 1],
        rowValues: [1, 0, 2, 0, 2]
    },
    {
        key: "lvl_6",
        nameLevel: "Level 6",
        startLevelState: [
            [1, 1, 1, 1, 0],
            [1, 0, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [1, 0, 1, 1, 1],
            [1, 1, 1, 0, 1]
        ],
        correctLevelState: [
            [1, 1, 1, 1, 0],
            [3, 0, 3, 1, 3],
            [0, 1, 1, 1, 1],
            [3, 0, 1, 1, 1],
            [1, 1, 1, 0, 3]
        ],
        columnValues: [2, 0, 1, 0, 2],
        rowValues: [0, 3, 0, 1, 1]
    },
    {
        key: "lvl_7",
        nameLevel: "Level 7",
        startLevelState: [
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [1, 1, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1]
        ],
        correctLevelState: [
            [1, 1, 1, 1, 3],
            [0, 3, 1, 1, 0],
            [1, 1, 0, 0, 3],
            [1, 1, 3, 1, 1],
            [3, 0, 1, 1, 1]
        ],
        columnValues: [1, 1, 1, 0, 2],
        rowValues: [1, 1, 1, 1, 1]
    },
    {
        key: "lvl_8",
        nameLevel: "Level 8",
        startLevelState: [
            [1, 1, 0, 1, 1],
            [1, 1, 1, 1, 0],
            [1, 1, 1, 0, 1],
            [1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1]
        ],
        correctLevelState: [
            [1, 1, 0, 1, 3],
            [1, 1, 3, 1, 0],
            [1, 1, 1, 0, 3],
            [1, 3, 0, 1, 1],
            [1, 1, 0, 3, 1]
        ],
        columnValues: [0, 1, 1, 1, 2],
        rowValues: [1, 1, 1, 1, 1]
    },
    {
        key: "lvl_9",
        nameLevel: "Level 9",
        startLevelState: [
            [1, 1, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1]
        ],
        correctLevelState: [
            [1, 3, 0, 0, 3],
            [1, 1, 1, 1, 1],
            [0, 3, 1, 1, 1],
            [1, 1, 1, 3, 1],
            [3, 0, 1, 0, 1]
        ],
        columnValues: [1, 2, 0, 1, 1],
        rowValues: [2, 0, 1, 1, 1]
    },
    {
        key: "lvl_10",
        nameLevel: "Level 10",
        startLevelState: [
            [1, 0, 0, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0],
            [1, 0, 1, 1, 1],
            [1, 1, 1, 0, 1]
        ],
        correctLevelState: [
            [3, 0, 0, 1, 1],
            [1, 1, 3, 1, 3],
            [1, 1, 1, 1, 0],
            [3, 0, 1, 1, 1],
            [1, 1, 1, 0, 3]
        ],
        columnValues: [2, 0, 1, 0, 2],
        rowValues: [1, 2, 0, 1, 1]
    },
    {
        key: "lvl_11",
        nameLevel: "Level 11",
        startLevelState: [
            [1, 0, 1, 1, 1],
            [0, 1, 1, 0, 1],
            [1, 1, 0, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0]
        ],
        correctLevelState: [
            [3, 0, 1, 1, 1],
            [0, 1, 3, 0, 3],
            [3, 1, 0, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 3, 0]
        ],
        columnValues: [2, 0, 1, 1, 1],
        rowValues: [1, 2, 1, 0, 1]
    },
    {
        key: "lvl_12",
        nameLevel: "Level 12",
        startLevelState: [
            [1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1],
            [1, 0, 1, 1, 1]
        ],
        correctLevelState: [
            [1, 3, 1, 3, 1],
            [1, 0, 1, 0, 1],
            [1, 3, 0, 0, 3],
            [1, 1, 0, 1, 1],
            [3, 0, 3, 1, 1]
        ],
        columnValues: [1, 2, 1, 1, 1],
        rowValues: [2, 0, 2, 0, 2]
    },
    {
        key: "lvl_13",
        nameLevel: "Level 13",
        startLevelState: [
            [0, 1, 0, 1, 1],
            [1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 0, 1, 1]
        ],
        correctLevelState: [
            [0, 3, 0, 3, 1],
            [1, 0, 1, 1, 1],
            [1, 3, 1, 3, 1],
            [1, 0, 1, 0, 1],
            [1, 3, 0, 3, 1]
        ],
        columnValues: [0, 3, 0, 3, 0],
        rowValues: [2, 0, 2, 0, 2]
    }
];