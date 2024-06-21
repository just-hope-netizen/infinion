import { useState } from "react";
import Buttons from "./Buttons";
import { format } from "date-fns";
import InputName from "./InputName";
import InputDes from "./InputDes";
import DailyDigestInput from "./DailyDigestInput";
import DigestCampaign from "./DigestCampaign";
import LinkedKeywords from "./LinkedKeywords";
import Dates from "./Dates";

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
  const [btnDisable, setBtnDisabled] = useState(false);
  const [formData, setFormData] = useState({
    campaignName: campaignName || "", // Added "" to make input controlled
    campaignDescription,
    // startDate: startDate,
    dailyDigest: dailyDigest || "",
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
    setBtnDisabled(true);

    setDateValidate({
      startDateError: true,
      endDateError: true,
    });
    if (!startDateVal || !endDateVal) {
      return;
    }

    const formattedStartDate = format(
      startDateVal,
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    );
    const formattedEndDate = format(endDateVal, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    const formattedDigestCampaign =
      formData.digestCampaign === "Yes"
        ? true
        : formData.digestCampaign
        ? true
        : false;

    if (typeof formData.linkedKeywords === "string") {
      const linkedKeywords = formData.linkedKeywords.split(/\s+/);
      const data = {
        ...formData,
        digestCampaign: formattedDigestCampaign,
        linkedKeywords,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      };
      sendData(data);
      return;
    } else {
      const data = {
        id,
        ...formData,
        linkedKeywords,
        digestCampaign: formattedDigestCampaign,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
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
      <Dates
        startDateVal={startDateVal}
        endDateVal={endDateVal}
        dateValidate={dateValidate}
        setEndDateVal={setEndDateVal}
        setStartDateVal={setStartDateVal}
      />
      <div
        className={` ${id ? " flex-col-reverse" : "flex-col"} flex space-y-4`}
      >
        <DigestCampaign formData={formData} setFormData={setFormData} id={id} />

        <LinkedKeywords
          linkedKeywords={formData.linkedKeywords}
          handleFormData={handleFormData}
        />
      </div>

      {formData.digestCampaign && (
        <DailyDigestInput
          formData={formData}
          setFormData={setFormData}
          id={id}
        />
      )}

      <Buttons id={id} badButton={badButton} disabled={btnDisable} />
    </form>
  );
};

export default CampaignForm;
