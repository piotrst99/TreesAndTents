import { Board } from "../../types/board";

export const level8_5x5: Board = {
  key: "lvl_8",
  nameLevel: "Level 8",
  startLevelState: [
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
  ],
  correctLevelState: [
    [1, 1, 0, 1, 3],
    [1, 1, 3, 1, 0],
    [1, 1, 1, 0, 3],
    [1, 3, 0, 1, 1],
    [1, 1, 0, 3, 1],
  ],
  columnValues: [0, 1, 1, 1, 2],
  rowValues: [1, 1, 1, 1, 1],
};
