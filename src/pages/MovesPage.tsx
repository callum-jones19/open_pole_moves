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
      <div className="w-full gap-4 px-4 pt-2 grid grid-cols-[repeat(auto-fill,250px)] justify-center pb-6">
        {moveData.map((md, i) => {
          return (
            <div className="h-full w-full flex justify-center">
              <MoveCard move={md} key={i} />
            </div>
          )})}
      </div>
    </>
  )
}

export default MovesPage;