import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
// import MainConatiner from "./MainContainer";

const Body = () => {
  return (
    <div className="flex px-4 py-4">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
