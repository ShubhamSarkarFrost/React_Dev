import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLyout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLyout;
