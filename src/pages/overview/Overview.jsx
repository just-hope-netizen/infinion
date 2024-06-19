import { CalendarDays } from "lucide-react";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import ExportIcon from "../../assets/svg/ExportIcon.svg";
import SearchIcon from "../../assets/svg/BigSearch.svg";
import PlusIcon from "../../assets/svg/PlusIcon.svg";
import { Link } from "react-router-dom";

const Overview = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="px-[85px]">
      <div className="flex items-center justify-between mt-[36px] ">
        <h1 className="font-bold text-[24px] text-primary ">Overview</h1>
        <div className="flex items-center">
          <div className="flex items-center py-2  rounded w-[320px] border">
            <h4 className="flex items-center w-[109px] text-[14px]  whitespace-nowrap border-r px-2">
              <CalendarDays className="text-primary" />
              Date Range
            </h4>
            <Datepicker
              value={value}
              // placeholder={"Nov 1, 2022 - Nov 7, 2022."} 
              displayFormat={"MM/DD/YYYY"}
              containerClassName=" relative pl-2 w-full"
              toggleClassName="  h-4  absolute right-2 top-[3px]"
              onChange={handleValueChange}
              separator={"-"}
              inputClassName={
                "text-[13px] focus:border-none focus:outline-none"
              }
            />
          </div>
          <h4 className="flex items-center gap-2 text-primary bg-[#F0F4F4] rounded w-fit py-[10px] px-8 ml-3">
            <img src={ExportIcon} alt="export icon" />
            Export
          </h4>
        </div>
      </div>
        <div className="my-[119px] mx-auto w-fit">
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
    </div>
  );
};

export default Overview;
