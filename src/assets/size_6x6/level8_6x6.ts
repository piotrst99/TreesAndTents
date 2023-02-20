import { Board } from "../../types/board";

export const level8_6x6: Board = {
  key: "lvl_8",
  nameLevel: "Level 8",
  startLevelState: [
    [0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1],
    [0, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1],
  ],
  correctLevelState: [
    [0, 3, 1, 1, 0, 3],
    [1, 1, 1, 1, 1, 1],
    [3, 0, 1, 3, 1, 1],
    [1, 1, 1, 0, 0, 1],
    [0, 1, 3, 1, 3, 1],
    [3, 1, 0, 1, 1, 1],
  ],
  columnValues: [2, 1, 1, 1, 1, 1],
  rowValues: [2, 0, 2, 0, 2, 1],
};
