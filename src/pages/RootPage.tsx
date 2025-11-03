import { Outlet } from "react-router";
import Header from "../components/Header";

export interface RootPageProps {
  onSearchString: (searchedString: string) => void;
}

const RootPage = ({ onSearchString }: RootPageProps) => {
  return (
    <>
      <div className="w-full h-screen">
        <Header
          onSearchString={searchedString => onSearchString(searchedString)}
        />
        <div className="w-full h-full pt-14">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default RootPage;