import { useMemo, useState } from "react";
import { generateMoveDB, type PoleMove } from "./data/moves"
import { createBrowserRouter, RouterProvider } from "react-router";
import MovePage from "./pages/MovePage";
import RootPage from "./pages/RootPage";
import MovesPage from "./pages/MovesPage";

function App() {
  const moveData = useMemo(() => {
    return generateMoveDB().concat(generateMoveDB()).concat(generateMoveDB()).concat(generateMoveDB()).concat(generateMoveDB()).concat(generateMoveDB());
  }, []);

  const [filteredMoves, setFilteredMoves] = useState<PoleMove[] | null>(null);

  const router = createBrowserRouter([
    {
      path: '/',
      // element: <MovesPage moveData={filteredMoves === null ? moveData : filteredMoves} />
      element: <RootPage onSearchString={searchedString => {
        if (searchedString === "") {
          setFilteredMoves(null);
        } else {
          const newFilteredMoves = moveData.filter(move => move.name.toLowerCase().includes(searchedString.toLowerCase()));
          setFilteredMoves(newFilteredMoves);
        }
      }} />,
      children: [
        { index: true, element: <MovesPage moveData={filteredMoves ? filteredMoves : moveData} /> },
        { path: '/combos', element: <></> },
        {
          path: '/move/:moveId',
          loader: async (params): Promise<PoleMove> => {
            console.log(params);
            const { moveId } = params.params;
            if (!moveId) {
              return Promise.reject("No valid move ID provided in URL!");
            }

            const parsedMoveId = parseInt(moveId);
            if (parsedMoveId === null || isNaN(parsedMoveId)) {
              return Promise.reject("Could not parse supplied move ID to a numerical value!");
            }

            const pageMove = moveData.find(md => md.id === parsedMoveId);

            if (!pageMove) {
              return Promise.reject("Could not find pole move with given ID in database");
            }

            return pageMove;
          },
          element: <MovePage />
        }
      ]
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
