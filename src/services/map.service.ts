import { allMaps } from "../assets/maps";
import { Board } from "../types/board";

interface IGetBoard{
  boardSize: string | undefined;
  levelName: string | undefined;
};

class MapService {
  getBoard(args: IGetBoard): Board | undefined {
    const { boardSize, levelName } = args;
    return allMaps.find(x => x.key === boardSize)
      ?.boards?.find(
        y => y.nameLevel.toLowerCase().replace(" ","") === levelName
      );
  }

  findMapBySize(boardSize: string) {
    return allMaps.find(x => x.key === boardSize);
  }
}

export default new MapService();