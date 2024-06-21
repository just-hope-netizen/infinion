import { Bell, ChevronDown } from "lucide-react";
import SearchBox from "./Search";
import Avatar from "../assets/img/avatar.png";

const Header = () => {
  return (
    <header className="py-6 px-[85px]    h-fit flex  justify-between  border-b fixed z-10 left-[292px] right-0 top-0  bg-white ">
      <SearchBox />
      <div className="flex items-center h-fit">
        <Bell className="h-[19px] mr-[7px]" />
        <div className="flex items-center border-l-2">
          <img src={Avatar} alt="Avatar icon"  className=" pl-[17px]"/>
          <h4 className="flex cursor-pointer ml-[10px] ">BigTech
            <ChevronDown className="text-primary ml-[5px]" />
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
