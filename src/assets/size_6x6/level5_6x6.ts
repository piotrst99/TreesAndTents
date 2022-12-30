import { Board } from "../../types/board";

export const level5_6x6: Board = {
    key: "lvl_5",
    nameLevel: "Level 5",
    startLevelState: [
        [1, 0, 1, 1, 0, 1],
        [1, 1, 1, 1, 0, 0],
        [1, 1, 1, 0, 1, 1],
        [1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1]
    ],
    correctLevelState: [
        [1, 0, 1, 1, 0, 3],
        [1, 3, 1, 3, 0, 0],
        [1, 1, 1, 0, 1, 3],
        [1, 0, 1, 3, 1, 1],
        [1, 3, 1, 1, 1, 1],
        [1, 1, 1, 0, 3, 1]
    ],
    columnValues: [0, 2, 0, 2, 1, 2],
    rowValues: [1, 2, 1, 1, 1, 1]
};
