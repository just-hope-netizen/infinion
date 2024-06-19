/* eslint-disable react/prop-types */
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { DatePicker } from "./DatePicker";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";

const CampaignForm = ({
  sendData,
  campaignName,
  campaignDescription,
  dailyDigest,
  digestCampaign,
  endDate,
  linkedKeywords,
  startDate,
  setOpenDeleteModal,
  id,
}) => {
    
  const [startDateVal, setStartDateVal] = useState(startDate);
  const [endDateVal, setEndDateVal] = useState(endDate);
  const [switchOn, setSwitchOn] = useState(true);
  const [dropVal, setDropVal] = useState(dailyDigest);
  const [digestCampaignVal, setDigestCampaignVal] = useState(digestCampaign );
  const [campaignNameVal, setCampaignNameVal] = useState(campaignName || ""); // Added "" to make input controlled
  const [campaignDesVal, setCampaignDesVal] = useState(campaignDescription);
  const [linkedKeywordsVal, setLinkedKeyWordsVal] = useState(
    linkedKeywords && linkedKeywords.join()
  );

  console.log(linkedKeywordsVal);
  const onSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const data = {
        id,
        campaignName: campaignNameVal,
        campaignDescription: campaignDesVal,
        linkedKeywords: linkedKeywordsVal.split(/\s+/),
        startDate: startDateVal,
        endDate: endDateVal,
        digestCampaign: digestCampaignVal === "Yes"? true: false ,
        dailyDigest: dropVal,
      };
      
      sendData(data);
      return
    }
    const data = {
      campaignName: campaignNameVal,
      campaignDescription: campaignDesVal,
      linkedKeywords: linkedKeywordsVal.split(/\s+/),
      startDate: startDateVal.toISOString(),
      endDate: endDateVal.toISOString(),
      digestCampaign: switchOn,
      dailyDigest: dropVal,
     
    };
    sendData(data);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    setOpenDeleteModal(true);
  };
  return (
    <form onSubmit={onSubmit} className="max-w-[684px] flex flex-col space-y-4">
      <div className=" pt-[10px]">
        <label htmlFor="campaignName">
          Campaign Name
          <span className=" text-[#FF0000]">*</span>
        </label>
        <Input
          placeholder="e.g  The Future is now"
          required={true}
          value={campaignNameVal}
          onChange={(e) => setCampaignNameVal(e.target.value)}
          className="mt-1  focus:ring-ring-0"
        />
      </div>
      <div>
        <label htmlFor="campaignDescription">
          Campaign Description
          <span className=" text-[#FF0000]">*</span>
        </label>
        <textarea
          className="w-full border p-2.5  h-[112px] rounded mt-1 resize-none"
          placeholder="Please add a description to your campaign"
          id="campaignDescription"
          name="campaignDescription"
          required={true}
          value={campaignDesVal}
          onChange={(e) => setCampaignDesVal(e.target.value)}
        ></textarea>
      </div>
      <div className="flex  gap-6">
        <div className="w-full">
          <span className=" block mb-1">
            Start Date
            <span className=" text-[#FF0000]">*</span>
          </span>
          <DatePicker
            date={startDateVal}
            setDate={setStartDateVal}
            required={true}
          />
          {startDateVal ? (
            " "
          ) : (
            <span className="text-[#FF0000]"> This field is required</span>
          )}
        </div>
        <div className="w-full">
          <span className=" block mb-1">
            End Date
            <span className=" text-[#FF0000]">*</span>
          </span>
          <DatePicker
            date={endDateVal}
            setDate={setEndDateVal}
            required={true}
          />
          {endDateVal ? (
            " "
          ) : (
            <span className="text-[#FF0000]"> This field is required</span>
          )}
        </div>
      </div>
      <div
        className={` ${id ? " flex-col-reverse" : "flex-col"} flex space-y-4`}
      >
        {id ? (
          <div className="mt-4">
            <Select
              required={true}
              value={digestCampaignVal}
              onValueChange={(val) => setDigestCampaignVal(val)}
            >
              <span>Want to receive daily Campaign about the campaign?</span>
              <SelectTrigger className=" mt-2">
                <SelectValue placeholder={digestCampaignVal} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={digestCampaignVal == "Yes" ? "No" : "Yes"}>
                  {digestCampaignVal == "Yes" ? "No" : "Yes"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div className="flex justify-between py-[10px]">
            <p>Want to receive daily digest about the campaign?</p>

            <Switch
              defaultChecked={switchOn}
              name="digestCampaign"
              checked={switchOn}
              onCheckedChange={(checked) => setSwitchOn(checked)}
            />
          </div>
        )}

        <div>
          <label htmlFor="linkedKeywords">
            Linked Keywords
            <span className=" text-[#FF0000]">*</span>
          </label>
          <textarea
            className="w-full border p-2.5  h-[112px] mt-1 rounded resize-none"
            placeholder="To add keywords, type your keyword and press enter"
            id="linkedKeywords"
            name="linkedKeywords"
            required={true}
            value={linkedKeywordsVal}
            onChange={(e) => setLinkedKeyWordsVal(e.target.value)}
          >
            
          </textarea>
          {/* <div className="mt-1 w-full h-[112px] py-[10px] pl-[10px]  text-[#999999] border rounded">
          {linkedKeywords.map((i, index) => (
            <Button className="text-white h-[24px] px-2 mr-1" key={index} onClick={()=>console.log('dv')}>
              {i}
            </Button>
          ))}
        </div> */}
        </div>
      </div>

      <div>
        <Select
          required={true}
          value={dropVal}
          onValueChange={(val) => setDropVal(val)}
        >
          <span>Kindly select how often you want to receive daily digest</span>
          <SelectTrigger
            className={`${id ? "w-full" : "w-[180px] mt-2"}              `}
          >
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Button
          onClick={deleteHandler}
          className={`px-[76px] py-[10px] mt-[45px] ${
            id ? " hidden" : " text-primary bg-white hover:bg-white"
          } font-semibold  border border-primary`}
        >
          {id ? "" : "    Cancel"}
        </Button>
        <Button
          type="submit"
          className={`px-[42.5px]  font-semibold py-[10px] ${
            id
              ? "text-primary border border-primary bg-white hover:bg-white"
              : "text-white ml-6"
          }
        `}
        >
          {id ? "Update Information" : "    Create Campaign"}
        </Button>
      </div>
    </form>
  );
};

export default CampaignForm;
