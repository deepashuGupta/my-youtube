import { Link } from "react-router-dom";
import SideList from "./SideList/SideList";
import { useSelector } from "react-redux";

const SideBar = () => {
  const toggleSelectore = useSelector((state) => state.app.isMenuOpen);

  // Early Return
  if (!toggleSelectore) {
    return null;
  }
  return (
    <>
      <div className="w-[15vw] max-h-[85vh] overflow-y-auto">
        <Link to={"/"}>
          <SideList />
        </Link>
        <SideList />
        <SideList />
      </div>
    </>
  );
};

export default SideBar;
