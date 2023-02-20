import { Board } from "../../types/board";

export const level12_5x5: Board = {
  key: "lvl_12",
  nameLevel: "Level 12",
  startLevelState: [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1],
  ],
  correctLevelState: [
    [1, 3, 1, 3, 1],
    [1, 0, 1, 0, 1],
    [1, 3, 0, 0, 3],
    [1, 1, 0, 1, 1],
    [3, 0, 3, 1, 1],
  ],
  columnValues: [1, 2, 1, 1, 1],
  rowValues: [2, 0, 2, 0, 2],
};
