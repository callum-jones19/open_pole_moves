import { useEffect, useState } from "react";
import { ArrowLeft, Menu } from "react-feather";

export interface HeaderProps {
  onSearchString: (searchTerm: string) => void;
}

const Header = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  
  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e);
    if (e.key === "s") {
      const searchBar = document.getElementById("headerSearchBar");
      if (searchBar) {
        console.log("Focusing search bar!");
        searchBar.focus();
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    }
  }, []);

  return (
    <>
      <div className="w-full h-14 sticky top-0 bg-neutral-800 text-white flex flex-row justify-between">
        <div className="h-full basis-full flex-row sm:flex hidden">
          <button className="px-3 border-b-4 border-neutral-400 bg-neutral-900 p-1">Moves</button>
        </div>
        <button
          type="button"
          className="px-4 hover:bg-neutral-700 sm:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Menu />
        </button>
        <input
          className="m-2 rounded-md px-3 border-neutral-500 border" placeholder="Press 's' to search..."
          id="headerSearchBar"
        />
      </div>
      <div className={"z-20 w-26 h-full bg-neutral-800 text-white left-0 top-0 flex flex-col " + (showSidebar ? "sm:hidden absolute" : "hidden")}>
        <button className="p-2 hover:bg-neutral-600 h-14" onClick={() => setShowSidebar(false)}>
          <ArrowLeft />
        </button>
        <button className="bg-neutral-900 py-3 px-1 text-start">Moves</button>
      </div>
    </>
  )
}

export default Header;