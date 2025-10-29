import Header from "./components/Header";
import MoveCard from "./components/MoveCard"
import { generateMoveDB } from "./data/moves"

function App() {
  const moveData = generateMoveDB().concat(generateMoveDB()).concat(generateMoveDB()).concat(generateMoveDB()).concat(generateMoveDB()).concat(generateMoveDB());
  
  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <div className="w-full shrink flex flex-row flex-wrap gap-5 p-5">
          {moveData.map(md => <MoveCard move={md} />)}  
        </div>
      </div>
    </>
  )
}

export default App
