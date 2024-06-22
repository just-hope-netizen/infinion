import { CalendarDays, ChevronDown } from "lucide-react";
import ExportIcon from "../../assets/svg/ExportIcon.svg";
import SearchIcon from "../../assets/svg/BigSearch.svg";
import PlusIcon from "../../assets/svg/PlusIcon.svg";
import { Link } from "react-router-dom";

const Overview = () => {
  window.scrollTo(0, 0);
  

  return (
    <>
      <div className="flex items-center justify-between ">
     
        <h1 className="font-bold text-[24px] text-primary ">Overview</h1>
        <div className="flex items-center">
          <div className="flex items-center py-2 text-[12px] rounded w-[320px] border">
            <h4 className="flex items-center w-[109px]   whitespace-nowrap border-r px-2">
              <CalendarDays className="text-primary h-5 mr-2" />
              Date Range
            </h4>
           <span className="px-2 flex  items-center justify-between w-full">

            Nov 1, 2022 - Nov 7, 2022.
            <ChevronDown  className="text-primary"/>
           </span>
          </div>
          <h4 className="flex items-center gap-2 text-primary bg-[#F0F4F4] rounded w-fit py-[10px] px-8 ml-3">
            <img src={ExportIcon} alt="export icon" />
            Export
          </h4>
        </div>
      </div>
        <div className="mt-[119px] mb-36 mx-auto w-fit">
          <img src={SearchIcon} alt="search icon" className="" />
          <p className="mt-[44px] font-semibold">No activity yet. Create a new campaign to get started</p>
          <Link
            to={"/create-campaign"}
            className="bg-[#247B7B] text-white flex rounded mx-auto mt-[35px] py-[8px] pl-[30px] w-[197px] gap-1"
          >
            <img src={PlusIcon} alt="new campaign icon" />
            New Campaign
          </Link>
    </div>
    </>
  );
};

export default Overview;
