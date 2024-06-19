import { Link } from "react-router-dom";
import ScrutzLogo from "../assets/svg/ScrutzLogo.svg";
import PlusIcon from "../assets/svg/PlusIcon.svg";
import OverviewIcon from "../assets/svg/OverviewIcon.svg";
import QuestionIcon from "../assets/svg/QuestionIcon.svg";
import { Button } from "./ui/button";
const Nav = () => {
  const currentPath= window.location.pathname
  return (
    <nav className="bg-[#F0F4F4] max-w-[292px] w-full pt-[31px] pb-[170px] ">
      <div className="flex items-center gap-4 ml-[40px] mb-[52px]">
        <Link to={"/"}>
          <img src={ScrutzLogo} alt="Scrutz logo" />
        </Link>
        <h1 className="font-[900] text-[32px] leading-none bg-gradient-to-r from-[#247B7B] to-[#3B247B] inline-block text-transparent bg-clip-text">
          <Link to={"/"}>Scrutz</Link>
        </h1>
      </div>
      <ul className=" text-primary w-fit ml-[40px] mb-[82px]">
        <li>
          <Link
            to={"/create-campaign"}
            className="bg-[#247B7B] text-white flex rounded mb-[40px] py-[8px] pl-[30px] gap-1"
          >
            <img src={PlusIcon} alt="new campaign icon" />
            New Campaign
          </Link>
        </li>
        <li>
          <Link to={"/"} className={ `${currentPath === "/" && "bg-white rounded text-[#247B7B]"} flex  w-[196px] py-[8px] pl-[30px] gap-1`}>
            <img src={OverviewIcon} alt="new campaign icon" />
            Overview
          </Link>
        </li>
        <li>
          <Link to={"/campaign"} className="  flex  w-[196px] py-[8px] pl-[30px] gap-1">
            <img src={OverviewIcon} alt="new campaign icon" />
            Campaign
          </Link>
        </li>
        <li>
          <Link to={"/market-intelligence"} className="  flex  w-[196px] py-[8px] pl-[30px] gap-1">
            <img src={OverviewIcon} alt="new campaign icon" />
            Market Intelligence
          </Link>
        </li>
        <li>
          <Link to={"/account-settings"} className="  flex  w-[196px] py-[8px] pl-[30px] gap-1">
            <img src={OverviewIcon} alt="new campaign icon" />
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
    </nav>
  );
};

export default Nav;
