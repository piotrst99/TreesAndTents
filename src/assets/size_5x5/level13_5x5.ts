import { Board } from "../../types/board";

export const level13_5x5: Board = {
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
};
