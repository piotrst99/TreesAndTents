import { Board } from "../../types/board";

export const level9_6x6: Board = {
    key: "lvl_9",
    nameLevel: "Level 9",
    startLevelState: [
        [0, 1, 1, 1, 1, 1],
        [0, 1, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 0, 1]
    ],
    correctLevelState: [
        [0, 3, 1, 1, 1, 1],
        [0, 1, 0, 1, 3, 0],
        [3, 1, 3, 1, 1, 1],
        [1, 1, 1, 1, 1, 3],
        [1, 1, 1, 3, 0, 0],
        [0, 3, 1, 1, 0, 3]
    ],
    columnValues: [1, 2, 1, 1, 1, 2],
    rowValues: [1, 1, 2, 1, 1, 2]
};
