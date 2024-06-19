import { Bell, ChevronDown } from "lucide-react";
import SearchBox from "./Search";
import Avatar from "../assets/img/avatar.png";

const Header = () => {
  return (
    <header className="py-[24px] px-[85px] w-full h-fit flex  justify-between  border-b-[1px]  ">
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
