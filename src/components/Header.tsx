import { useEffect, useState } from "react";
import { ArrowLeft, Menu, X } from "react-feather";
import { NavLink } from "react-router";

export interface HeaderProps {
  onSearchString: (searchTerm: string) => void;
}

const Header = ({ onSearchString }: HeaderProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "s") {
      const searchBar = document.getElementById("headerSearchBar");
      if (searchBar) {
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
      <div className="w-full h-14 fixed top-0 bg-neutral-800 text-white flex flex-row justify-between">
        <nav className="h-full basis-full flex-row sm:flex hidden">
          <NavLink to="/" className={({ isActive }) => `px-3 flex items-center hover:bg-neutral-600 hover:cursor-default ${isActive ? "bg-neutral-700 border-b-4 border-neutral-400 font-bold" : "bg-neutral-800"}`}>Moves</NavLink>
          <NavLink to="/combos" className={({ isActive }) => `px-3 flex items-center hover:bg-neutral-600 hover:cursor-default ${isActive ? "bg-neutral-700 border-b-4 border-neutral-400 font-bold" : "bg-neutral-800"}`}>Combos</NavLink>
        </nav>
        <button
          type="button"
          className="px-4 hover:bg-neutral-700 sm:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Menu />
        </button>
        <input
          className="m-2 rounded-md px-3 border-neutral-500 border w-96" placeholder="Press 's' to search..."
          id="headerSearchBar"
          onChange={e => onSearchString(e.currentTarget.value)}
        />
      </div>
      <div className={"z-20 w-26 h-full bg-neutral-800 text-white left-0 top-0 flex flex-col " + (showSidebar ? "sm:hidden fixed" : "hidden")}>
        <button className="p-2 hover:bg-neutral-600 h-14" onClick={() => setShowSidebar(false)}>
          <X />
        </button>
        <NavLink to="/" className={({ isActive }) => `py-3 px-3 flex items-center hover:bg-neutral-600 hover:cursor-default ${isActive ? "bg-neutral-700 font-bold `border-b-4 border-neutral-400" : "bg-neutral-800"}`}>Moves</NavLink>
        <NavLink to="/combos" className={({ isActive }) => `py-3 px-3 flex items-center hover:bg-neutral-600 hover:cursor-default ${isActive ? "bg-neutral-700 font-bold `border-b-4 border-neutral-400" : "bg-neutral-800"}`}>Combos</NavLink>
      </div>
    </>
  )
}

export default Header;
