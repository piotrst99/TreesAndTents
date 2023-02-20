import { Board } from "../../types/board";

export const level5_5x5: Board = {
  key: "lvl_5",
  nameLevel: "Level 5",
  startLevelState: [
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [0, 1, 1, 1, 0],
  ],
  correctLevelState: [
    [3, 0, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 3, 1, 1, 3],
    [1, 0, 1, 1, 1],
    [0, 3, 1, 3, 0],
  ],
  columnValues: [1, 2, 0, 1, 1],
  rowValues: [1, 0, 2, 0, 2],
};
