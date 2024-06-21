import { Link } from "react-router-dom";
import ScrutzLogo from "../assets/svg/ScrutzLogo.svg";
import PlusIcon from "../assets/svg/PlusIcon.svg";
import MarketIntell from "../assets/svg/MarketIntell.svg";
import OverviewIcon from "../assets/svg/OverviewIcon.svg";
import CampaignIcon from "../assets/svg/CampaignIcon.svg";
import CampaignChange from "../assets/svg/CampaignChange.svg";
import OverviewIconChange from "../assets/svg/OverviewChange.svg";
import QuestionIcon from "../assets/svg/QuestionIcon.svg";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";
const Nav = () => {
  const currentPath= window.location.pathname
  return (
      <section className="bg-[#F0F4F4] max-w-[292px] w-full pt-[31px] overflow-y-scroll  pb-12 fixed bottom-0 top-0   left-0  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

      <div className="flex items-center gap-4 ml-10  mb-[52px]">
        <Link to={"/"}>
          <img src={ScrutzLogo} alt="Scrutz logo" />
        </Link>
        <h1 className="font-[900] text-[32px] leading-none bg-gradient-to-r from-[#247B7B] to-[#3B247B] inline-block text-transparent bg-clip-text">
          <Link to={"/"}>Scrutz</Link>
        </h1>
      </div>
      <ul className=" text-[#455454] w-fit ml-10 mb-[82px]">
        <li>
          <Link
            to={"/create-campaign"}
            className="bg-[#247B7B] text-white flex rounded mb-[40px] py-[8px] pl-[30px] gap-1"
          >
            <img src={PlusIcon} alt="new campaign icon" />
            New Campaign
          </Link>
        </li>
        <li >
          <Link to={"/"} className={ `${currentPath === "/" && "bg-white rounded text-[#247B7B]"} flex  w-[196px] py-[8px] pl-[30px] gap-1`}>
          
            <img src={currentPath === "/" ? OverviewIconChange: OverviewIcon} alt="overview icon" />
           
            Overview
          </Link>
        </li>
        <li>
          <Link to={"/campaign"} className={ `${currentPath === "/campaign" && "bg-white rounded text-[#247B7B]"}  flex  w-[196px] py-[8px] pl-[30px] gap-1`}>
          
            <img src={ currentPath  === "/campaign" ? CampaignChange : CampaignIcon} alt=" campaign icon" />
            Campaign
          </Link>
        </li>
        <li>
          <Link className="  flex items-center w-[196px] py-[8px] pl-[30px] gap-1">
            <img src={MarketIntell} alt="market icon" />
            Market Intelligence
          </Link>
        </li>
        <li>
          <Link className="  flex items-center w-[196px] py-[8px] pl-[30px] gap-1">
            <Settings  className=""/>
            Account Settings
          </Link>
        </li>
      </ul>
      <div className=" max-w-[228px] w-full bg-white ml-[32px] py-[30px] px-[41px] rounded flex flex-col justify-center">
        <span className="flex justify-center">
          <img src={QuestionIcon} alt="Question mark" />
        </span>
        <h4 className=" text-center my-[4px] font-semibold bg-gradient-to-r from-[#247B7B] to-[#3B247B] inline-block text-transparent bg-clip-text">
          Need help?{" "}
        </h4>
        <p className="text-[12px]  text-center">
          We’re readily available to provide help
        </p>
        <Button className=' border border-primary bg-white text-primary mt-[16px] hover:text-white'>Get help</Button>
      </div>
      </section>

  );
};

export default Nav;
