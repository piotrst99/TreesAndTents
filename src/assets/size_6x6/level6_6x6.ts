import { Board } from "../../types/board";

export const level6_6x6: Board = {
  key: "lvl_6",
  nameLevel: "Level 6",
  startLevelState: [
    [1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0],
    [1, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 1, 0],
    [1, 1, 1, 0, 1, 1],
  ],
  correctLevelState: [
    [1, 1, 1, 1, 3, 1],
    [1, 3, 0, 1, 0, 1],
    [0, 1, 1, 1, 3, 0],
    [3, 1, 3, 0, 1, 1],
    [0, 1, 1, 1, 3, 0],
    [3, 1, 3, 0, 1, 1],
  ],
  columnValues: [2, 1, 2, 0, 3, 0],
  rowValues: [1, 1, 1, 2, 1, 2],
};
