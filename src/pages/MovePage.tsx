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
      <div className="h-full w-full flex flex-col">
        <div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row">
          {!pagePoleMove.basicImage &&
            <div className="bg-neutral-200 h-1/2 lg:h-full lg:py-4 lg:self-center lg:w-1/2 relative flex flex-col justify-center items-center text-neutral-600">
              <p className="italic">No image found</p>
              <div className="absolute bottom-2 w-full h-10 flex flex-row justify-center text-black">
                <button type="button" className="bg-neutral-800 text-white hover:bg-neutral-600 hover:text-white h-full p-1 px-3 rounded-l-md shadow-md">Image</button>
                <button type="button" className="bg-neutral-300 hover:bg-neutral-400 h-full p-1 px-3 rounded-r-md shadow-md">Video</button>
              </div>
            </div>
          }
          <div className="p-2 h-1/2 flex flex-col gap-1 lg:overflow-auto">
            <h1 className="text-3xl font-bold w-full mb-2 mt-1">
              {pagePoleMove.name}
            </h1>
            <p><b>Alternate names</b>: {alternateNames}</p>
            <p><b>Engaged body parts</b>: {engagedBodyParts}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovePage;
