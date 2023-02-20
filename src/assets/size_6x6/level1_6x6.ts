import { Board } from "../../types/board";

export const level1_6x6: Board = {
  key: "lvl_1",
  nameLevel: "Level 1",
  startLevelState: [
    [1, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1],
  ],
  correctLevelState: [
    [3, 1, 3, 0, 1, 3],
    [0, 0, 1, 1, 1, 0],
    [1, 3, 0, 3, 1, 1],
    [1, 1, 1, 1, 1, 3],
    [1, 0, 1, 3, 0, 0],
    [1, 3, 1, 1, 1, 1],
  ],
  columnValues: [1, 2, 1, 2, 0, 2],
  rowValues: [3, 0, 2, 1, 1, 1],
};
