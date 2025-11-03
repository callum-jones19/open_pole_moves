import { useLoaderData } from "react-router";
import type { PoleMove } from "../data/moves";

const MovePage = () => {
  const pagePoleMove = useLoaderData<PoleMove>();
  
  const alternateNames = pagePoleMove.alternateNames.length === 0 ?
    (<i>none recorded</i>) :
    pagePoleMove.alternateNames.map((altName, i) => (i + 1) !== pagePoleMove.alternateNames.length ? `${altName}, ` : altName);

  const engagedBodyParts = pagePoleMove.engagedBodyParts.length === 0 ?
    (<i>none recorded</i>) :
    pagePoleMove.engagedBodyParts.map((bodyPart, i) => (i + 1) !== pagePoleMove.alternateNames.length ? `${bodyPart}, ` : bodyPart);


  return (
    <>
      <div className="w-full h-full flex flex-col">
        {pagePoleMove.basicImage && <img src="https://polepedia.com/wp-content/uploads/2020/05/Basic-Pole-Climb-PolePedia-Pole-Moves.gif" className="h-1/2 object-contain" />}
        {!pagePoleMove.basicImage && <div className="bg-neutral-200 h-1/2" />}
        <div className="p-2">
          <h1 className="text-3xl font-bold w-full">{pagePoleMove.name}</h1>        
          <p>Alternate names: {alternateNames}</p>
          <p>Engaged body parts: {engagedBodyParts}</p>
        </div>
      </div>
    </>
  );
}

export default MovePage;