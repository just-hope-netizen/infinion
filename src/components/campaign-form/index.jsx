/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { DatePicker } from "../DatePicker";
import { Switch } from "../ui/switch";
import Buttons from "./Buttons";
import { format } from "date-fns";
import InputName from "./InputName";
import InputDes from "./InputDes";

const CampaignForm = ({
  sendData,
  campaignName,
  campaignDescription,
  dailyDigest,
  digestCampaign,
  endDate,
  linkedKeywords,
  startDate,
  badButton,
  id,
}) => {
  const [dateValidate, setDateValidate] = useState({
    startDateError: false,
    endDateValidated: false,
  });
  const [startDateVal, setStartDateVal] = useState(startDate);
  const [endDateVal, setEndDateVal] = useState(endDate);
  const [formData, setFormData] = useState({
    campaignName: campaignName || "", // Added "" to make input controlled
    campaignDescription,
    // startDate: startDate,
    dailyDigest: dailyDigest,
    digestCampaign: digestCampaign || true,
    // endDate: endDate,
    linkedKeywords: linkedKeywords,
  });

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setDateValidate({
      startDateError: true,
      endDateError: true,
    });
    if (!startDateVal || !endDateVal) return;

    const formatterStartDate = format(
      startDateVal,
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    );
    const formatterEndDate = format(endDateVal, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    const formatterDigestCampaign = formData.digestCampaign === "Yes" ? true : false;

    if (typeof formData.linkedKeywords === "string") {
      const linkedKeywords = formData.linkedKeywords.split(/\s+/);

      const data = {
        ...formData,
        digestCampaign: formatterDigestCampaign,
        linkedKeywords,
        startDate: formatterStartDate,
        endDate: formatterEndDate,
      };

      sendData(data);
      return;
    } else {
      const data = {
        id,
        ...formData,
        linkedKeywords,
        digestCampaign: formatterDigestCampaign,
        startDate: formatterStartDate,
        endDate: formatterEndDate,
      };

      sendData(data);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-[684px] flex flex-col space-y-4">
      <InputName handleFormData={handleFormData} name={formData.campaignName} />
      {id ? null : (
        <InputDes
          handleFormData={handleFormData}
          des={formData.campaignDescription}
        />
      )}
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
          {startDateVal
            ? null
            : dateValidate.startDateError && (
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
          {endDateVal
            ? null
            : dateValidate.endDateError && (
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
              name="digestCampaign"
              value={formData.digestCampaign}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  digestCampaign: value,
                })
              }
            >
              <span>Want to receive daily Campaign about the campaign?</span>
              <SelectTrigger className=" mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"Yes"}>
                 Yes
                </SelectItem>
                <SelectItem
                  value={"No"}
                >
                  No
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div className="flex justify-between py-[10px]">
            <p>Want to receive daily digest about the campaign?</p>

            <Switch
              name="digestCampaign"
              checked={formData.digestCampaign}
              onCheckedChange={(checked) =>
                setFormData({
                  ...formData,
                  digestCampaign: checked,
                })
              }
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
            value={formData.linkedKeywords}
            onChange={handleFormData}
          ></textarea>
          {/* <div className="mt-1 w-full h-[112px] py-[10px] pl-[10px]  text-[#999999] border rounded">
            {formData.linkedKeywords &&
              formData?.linkedKeywords?.map((i, index) => (
                <Button
                  className="text-white h-[24px] px-2 mr-1"
                  key={index}
                  onClick={() => console.log("dv")}
                >
                  {i}
                </Button>
              ))}
            <input
              placeholder="To add keywords, type your keyword and press enter"
              id="linkedKeywords"
              name="linkedKeywords"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              // required={true}
            //   onChange={handleFormData}
            />
          </div> */}
        </div>
      </div>

      <div>
        <Select
          required={true}
          value={formData.dailyDigest}
          onValueChange={(value) =>
            setFormData({
              ...formData,
              dailyDigest: value,
            })
          }
        >
          <span>Kindly select how often you want to receive daily digest</span>
          <SelectTrigger className={`${id ? "w-full" : "w-[180px] mt-2"}  `}>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Buttons id={id} badButton={badButton} />
    </form>
  );
};

export default CampaignForm;
