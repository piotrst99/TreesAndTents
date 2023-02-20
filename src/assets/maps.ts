import { LevelMaps } from "../types/board";
import { mapsFor_5x5 } from "./size_5x5/maps_5x5";
import { mapsFor_6x6 } from "./size_6x6/maps_6x6";
import { mapsFor_7x7 } from "./size_7x7/maps_7x7";

export const allMaps: LevelMaps[] = [
  {
    key: "5x5",
    boards: mapsFor_5x5,
  },
  {
    key: "6x6",
    boards: mapsFor_6x6,
  },
  {
    key: "7x7",
    boards: mapsFor_7x7,
  },
];
