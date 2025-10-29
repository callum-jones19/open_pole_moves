import { useLoaderData } from "react-router";
import type { PoleMove } from "../data/moves";

const MovePage = () => {
  const pagePoleMove = useLoaderData<PoleMove>();
  
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <h1 className="text-4xl font-bold">{pagePoleMove.name}</h1>
        <div className="w-full flex flex-row justify-between">
          <img src={undefined} alt="Move image" className="h-80 w-80 bg-neutral-100" />
          <div className="w-full flex flex-col gap-2">
            <p><i>Alternate names</i>: {pagePoleMove.alternateNames}</p>
            <p><i>Difficulty</i>: {pagePoleMove.difficulty}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovePage;