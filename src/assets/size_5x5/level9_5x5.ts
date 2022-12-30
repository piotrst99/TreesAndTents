import { Board } from "../../types/board";

export const level9_5x5: Board = {
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
};
