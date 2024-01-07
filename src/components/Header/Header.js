import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/store/appSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-16 bg-gray-100 flex justify-between items-center px-4 shadow-md sticky top-0">
      <div className="flex items-center">
        <img
          onClick={() => dispatch(toggleMenu())}
          className="h-10 mr-2 cursor-pointer"
          alt="hamburger_menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="h-6"
          alt="logo_icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"
        />
      </div>
      <div className="max-w-1/3">
        <input
          className="px-4 py-2 w-96 border-2 rounded-l-full border-gray-400"
          type="text"
          placeholder="Search"
        />
        <button className="px-4 py-2 border-y-2 border-r-2 rounded-r-full border-gray-400">
          Search
        </button>
      </div>
      <div>
        <img
          className="w-10"
          alt="user_img"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        />
      </div>
    </div>
  );
};

export default Header;
