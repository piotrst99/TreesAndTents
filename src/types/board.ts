import { BoardItems } from "./boardItems";

export interface Board {
  key: string;
  nameLevel: string;
  startLevelState: BoardItems[][];
  correctLevelState: BoardItems[][];
  columnValues: number[];
  rowValues: number[];
}

export interface LevelMaps {
  key: string;
  boards?: Board[];
}

// TODO
// Add parameter to interface
export interface BoardProps {}
