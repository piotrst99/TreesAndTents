import { Board } from "../../types/board";

export const level1_5x5: Board = {
  key: "lvl_1",
  nameLevel: "Level 1",
  startLevelState: [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0],
  ],
  correctLevelState: [
    [1, 1, 1, 3, 1],
    [3, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 3, 1, 3],
    [3, 1, 1, 1, 0],
  ],
  columnValues: [2, 0, 1, 1, 1],
  rowValues: [1, 1, 0, 2, 1],
};
