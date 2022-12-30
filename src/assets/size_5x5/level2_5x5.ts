import { Board } from "../../types/board";

export const level2_5x5: Board = {
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
};
