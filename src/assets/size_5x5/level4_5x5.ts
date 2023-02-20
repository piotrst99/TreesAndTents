import { Board } from "../../types/board";

export const level4_5x5: Board = {
  key: "lvl_4",
  nameLevel: "Level 4",
  startLevelState: [
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
  ],
  correctLevelState: [
    [1, 1, 3, 0, 0],
    [0, 1, 1, 1, 3],
    [3, 1, 0, 1, 1],
    [1, 1, 3, 1, 3],
    [1, 1, 1, 1, 0],
  ],
  columnValues: [1, 0, 2, 0, 2],
  rowValues: [1, 1, 1, 2, 0],
};
