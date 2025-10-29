import { NavLink } from "react-router";
import type { PoleMove } from "../data/moves";

export interface MoveCardProps {
  move: PoleMove;
}

const MoveCard = ({ move }: MoveCardProps) => {
  return (
    <>
      <NavLink to={`/move/${move.id}`} className="w-60 h-80 shadow-md flex flex-col justify-between">
        <img src={undefined} alt="move_name_img" className="bg-neutral-100 w-full h-3/4" loading="lazy" />
        <div className="p-2">
          <p className="text-lg">{move.name}</p>
          <p>{move.difficulty}</p>
        </div>
      </NavLink>
    </>
  )
}

export default MoveCard;