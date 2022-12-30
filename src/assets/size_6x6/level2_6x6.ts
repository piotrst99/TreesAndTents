import { Board } from "../../types/board";

export const level2_6x6: Board = {
    key: "lvl_2",
    nameLevel: "Level 2",
    startLevelState: [
        [1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 0, 1],
        [0, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1]
    ],
    correctLevelState: [
        [1, 0, 3, 0, 3, 1],
        [3, 1, 1, 1, 0, 1],
        [0, 1, 0, 1, 3, 1],
        [3, 1, 3, 1, 1, 0],
        [0, 1, 1, 1, 1, 3],
        [1, 1, 1, 1, 1, 1]
    ],
    columnValues: [2, 0, 2, 0, 2, 1],
    rowValues: [2, 1, 1, 2, 1, 0]
};
