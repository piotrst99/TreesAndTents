import { Board } from "../../types/board";

export const level11_5x5: Board = {
  key: "lvl_11",
  nameLevel: "Level 11",
  startLevelState: [
    [1, 0, 1, 1, 1],
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
  ],
  correctLevelState: [
    [3, 0, 1, 1, 1],
    [0, 1, 3, 0, 3],
    [3, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 3, 0],
  ],
  columnValues: [2, 0, 1, 1, 1],
  rowValues: [1, 2, 1, 0, 1],
};
