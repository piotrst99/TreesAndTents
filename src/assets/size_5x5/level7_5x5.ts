import { Board } from "../../types/board";

export const level7_5x5: Board = {
  key: "lvl_7",
  nameLevel: "Level 7",
  startLevelState: [
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
  ],
  correctLevelState: [
    [1, 1, 1, 1, 3],
    [0, 3, 1, 1, 0],
    [1, 1, 0, 0, 3],
    [1, 1, 3, 1, 1],
    [3, 0, 1, 1, 1],
  ],
  columnValues: [1, 1, 1, 0, 2],
  rowValues: [1, 1, 1, 1, 1],
};
