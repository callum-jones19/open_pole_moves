import { useMemo, useState } from "react";
import { generateMoveDB, type PoleMove } from "./data/moves"
import { createBrowserRouter, RouterProvider } from "react-router";
import MovePage from "./pages/MovePage";
import RootPage from "./pages/RootPage";
import MovesPage from "./pages/MovesPage";

function App() {
  const moveData = useMemo(() => {
    return generateMoveDB();
  }, []);

  const [filteredMoves, setFilteredMoves] = useState<PoleMove[] | null>(null);

  const router = createBrowserRouter([
    {
      path: '/',
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

            const pageMove = moveData.find(md => md.id === moveId);

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
