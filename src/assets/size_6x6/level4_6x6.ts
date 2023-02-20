import { Board } from "../../types/board";

export const level4_6x6: Board = {
  key: "lvl_4",
  nameLevel: "Level 4",
  startLevelState: [
    [0, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1],
    [1, 1, 0, 1, 0, 1],
  ],
  correctLevelState: [
    [0, 1, 0, 1, 1, 3],
    [3, 1, 3, 1, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [3, 0, 1, 1, 3, 1],
    [1, 1, 1, 1, 0, 1],
    [1, 3, 0, 1, 0, 3],
  ],
  columnValues: [2, 1, 1, 0, 1, 2],
  rowValues: [1, 2, 0, 2, 0, 2],
};
