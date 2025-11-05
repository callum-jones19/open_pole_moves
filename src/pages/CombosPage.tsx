import { NavLink } from "react-router";

const CombosPage = () => {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center flex-col gap-3">
        <p className="text-neutral-600 italic">The Combos page is under construction. Check back here later!</p>
        <NavLink
          to="/"
          type="button"
          className="hover:cursor-auto rounded-md bg-neutral-700 hover:bg-neutral-500 text-white p-2"
        >
          <p>Return home</p>
        </NavLink>
      </div>
    </>
  );
}

export default CombosPage;
