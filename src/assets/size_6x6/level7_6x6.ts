import { Board } from "../../types/board";

export const level7_6x6: Board = {
  key: "lvl_7",
  nameLevel: "Level 7",
  startLevelState: [
    [1, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0],
    [1, 0, 1, 1, 0, 1],
    [0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1],
  ],
  correctLevelState: [
    [3, 1, 3, 0, 1, 1],
    [0, 1, 1, 1, 3, 1],
    [1, 1, 1, 1, 0, 0],
    [3, 0, 1, 3, 0, 3],
    [0, 1, 1, 1, 1, 1],
    [3, 1, 3, 0, 0, 3],
  ],
  columnValues: [3, 0, 2, 1, 1, 2],
  rowValues: [2, 1, 0, 3, 0, 3],
};
