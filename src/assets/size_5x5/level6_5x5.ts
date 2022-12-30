import { Board } from "../../types/board";

export const level6_5x5: Board = {
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
};
