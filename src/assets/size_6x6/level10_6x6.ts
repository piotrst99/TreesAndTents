import { Board } from "../../types/board";

export const level10_6x6: Board = {
    key: "lvl_10",
    nameLevel: "Level 10",
    startLevelState: [
        [1, 1, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 0]
    ],
    correctLevelState: [
        [3, 1, 3, 0, 1, 0],
        [0, 0, 1, 1, 1, 3],
        [1, 3, 0, 3, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 3, 1, 1, 1, 3],
        [1, 0, 1, 3, 0, 0]
    ],
    columnValues: [1, 2, 1, 2, 0, 2],
    rowValues: [2, 1, 2, 0, 2, 1]
};
