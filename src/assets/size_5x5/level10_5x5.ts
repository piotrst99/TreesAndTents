import { Board } from "../../types/board";

export const level10_5x5: Board = {
  key: "lvl_10",
  nameLevel: "Level 10",
  startLevelState: [
    [1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
  ],
  correctLevelState: [
    [3, 0, 0, 1, 1],
    [1, 1, 3, 1, 3],
    [1, 1, 1, 1, 0],
    [3, 0, 1, 1, 1],
    [1, 1, 1, 0, 3],
  ],
  columnValues: [2, 0, 1, 0, 2],
  rowValues: [1, 2, 0, 1, 1],
};
