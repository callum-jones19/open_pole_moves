import MoveCard from "../components/MoveCard";
import type { PoleMove } from "../data/moves";

export interface MovesPageProps {
  moveData: PoleMove[];
}

export interface MovesPageParams {
  moveId: number;
}

const MovesPage = ({ moveData }: MovesPageProps) => {
  return (
    <>
      <div className="w-full flex flex-row flex-wrap gap-4 px-4 pt-2">
        {moveData.map((md, i) => <MoveCard move={md} key={i} />)}
      </div>
    </>
  )
}

export default MovesPage;