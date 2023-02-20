import { Board } from "../../types/board";

export const level3_6x6: Board = {
  key: "lvl_3",
  nameLevel: "Level 3",
  startLevelState: [
    [1, 0, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 0],
  ],
  correctLevelState: [
    [3, 0, 1, 1, 1, 1],
    [1, 1, 0, 3, 1, 1],
    [1, 0, 1, 1, 1, 0],
    [1, 3, 1, 3, 0, 3],
    [1, 1, 1, 1, 1, 1],
    [1, 3, 0, 1, 3, 0],
  ],
  columnValues: [1, 2, 0, 2, 1, 1],
  rowValues: [1, 1, 0, 3, 0, 2],
};
