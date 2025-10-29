import { useMemo, useState } from "react";
import Header from "./components/Header";
import MoveCard from "./components/MoveCard"
import { generateMoveDB, type PoleMove } from "./data/moves"

function App() {
  const moveData = useMemo(() => {
    return generateMoveDB().concat(generateMoveDB()).concat(generateMoveDB()).concat(generateMoveDB()).concat(generateMoveDB()).concat(generateMoveDB());
  }, []);
  
  const [filteredMoves, setFilteredMoves] = useState<PoleMove[] | null>(null);

  return (
    <>
      <div className="w-screen h-screen">
        <Header
          onSearchString={searchedString => {
            if (searchedString === "") {
              setFilteredMoves(null);
            } else {
              const newFilteredMoves = moveData.filter(move => move.name.toLowerCase().includes(searchedString.toLowerCase()));
              setFilteredMoves(newFilteredMoves);
            }
          }}
        />
        <div className="w-full shrink flex flex-row flex-wrap gap-5 p-5 pt-20">
          {/* {moveData.map((md, i) => <MoveCard move={md} key={i} />)} */}
          {filteredMoves === null ?
            moveData.map((md, i) => <MoveCard move={md} key={i} />) :
            filteredMoves.map((md, i) => <MoveCard move={md} key={i} />)
          }
        </div>
      </div>
    </>
  )
}

export default App
