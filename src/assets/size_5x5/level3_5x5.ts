import { Board } from "../../types/board";

export const level3_5x5: Board = {
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
};
