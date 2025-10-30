import { NavLink } from "react-router";
import type { PoleMove } from "../data/moves";
import { ArrowRight } from "react-feather";

export interface MoveCardProps {
  move: PoleMove;
}

const MoveCard = ({ move }: MoveCardProps) => {
  return (
    <>
      <NavLink
        to={`/move/${move.id}`}
        className="w-60 h-80 shadow-md flex flex-col justify-between hover:bg-neutral-700 hover:text-white hover:cursor-default hover:font-bold group"
      >
        {move.basicImage ?
          <img
            src={undefined}
            alt="move_name_img"
            className="bg-neutral-100 w-full h-3/4 font-normal text-black" loading="lazy"
          /> :
          <p className="bg-neutral-100 w-full h-3/4 text-neutral-500 font-normal italic flex items-center justify-center">No image provided</p>
        }
        <div className="p-2 flex flex-row w-full justify-between items-center grow">
          <div>
            <p className="text-lg">{move.name}</p>
            <p className="font-normal italic text-sm">{move.difficulty}</p>
          </div>
          <ArrowRight className="hidden group-hover:block" />
        </div>
      </NavLink>
    </>
  )
}

export default MoveCard;