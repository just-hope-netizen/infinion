/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DeleteCampaign from "../DeleteCampaign";

const ViewCampaign = ({
  id,
  campaignName,
  campaignDescription,
  dailyDigest,
  digestCampaign,
  endDate,
  linkedKeywords,
  startDate,
  setEditVal,
  setViewVal,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const formatterEndDate = new Date(endDate).toLocaleDateString('en-GB');
  const formatterStartDate = new Date(startDate).toLocaleDateString('en-GB');
  return (
    <><div className="max-w-[684px] flex flex-col space-y-4">
      <div className=" pt-[10px]">
        <h4>
          Campaign Name
          <span className=" text-[#FF0000]">*</span>
        </h4>
        <div className="mt-1 w-full py-[10px] pl-[10px]  text-[#999999] border rounded">
          {campaignName}{" "}
        </div>
      </div>
      <div>
        <h4>
          Campaign Description
          <span className=" text-[#FF0000]">*</span>
        </h4>
        <div className="mt-1 w-full h-[112px] py-[10px] pl-[10px]  text-[#999999] border rounded">
          {campaignDescription}
        </div>
      </div>
      <div className="flex  gap-6">
        <div className="w-full">
          <h4 className=" block mb-1">
            Start Date
            <span className=" text-[#FF0000]">*</span>
          </h4>
          <div className="py-[10px] pl-[10px]  text-[#999999] border rounded">
            {" "}
            {formatterStartDate}
          </div>
        </div>
        <div className="w-full">
          <h4 className=" block mb-1">
            End Date
            <span className=" text-[#FF0000]">*</span>
          </h4>
          <div className="py-[10px] pl-[10px]  text-[#999999] border rounded">
            {" "}
            {formatterEndDate}
          </div>
        </div>
      </div>
      <div>
        <h4>
          Linked Keywords
          <span className=" text-[#FF0000]">*</span>
        </h4>
        <div className="mt-1 w-full h-[112px] py-[10px] pl-[10px]  text-[#999999] border rounded">
          {linkedKeywords.map((i, index) => (
            <Button className="text-white h-[24px] px-2 mr-1" key={index}>
              {i}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h4>
          Want to receive daily Campaign about the campaign?
          <span className=" text-[#FF0000]">*</span>
        </h4>
        <div className="mt-1 w-full py-[10px] pl-[10px]  text-[#999999] border rounded">
          {digestCampaign}
        </div>
      </div>
      <div>
        <h4>
          Kindly select how often you want to receive daily digest
          <span className=" text-[#FF0000]">*</span>
        </h4>
        <div className="mt-1 w-full py-[10px] pl-[10px]  text-[#999999] border rounded">
          {dailyDigest}
        </div>
      </div>
      <div>
        <Button
          onClick={() => setOpenDeleteModal(true)}
          className={`px-[76px] py-[10px] mt-[45px] 
             text-white bg-[#990000] hover:bg-[#990000]  border border-[#990000]`}
        >
          Stop Campaign
        </Button>
        <Button
          onClick={() => {
            setViewVal(false);
            setEditVal(true);
          } }
          type="submit"
          className={`px-[42.5px] ml-6 font-semibold py-[10px]  text-primary border border-primary bg-white hover:bg-white"
        `}
        >
          Edit Information
        </Button>
      </div>
    </div><DeleteCampaign
        id={id}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal} /></>
  );
};

export default ViewCampaign;
