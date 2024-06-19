import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { useState } from "react";
import Header from "./Header";
import ViewCampaign from "./ViewCampaign";
import EditCampaign from "./EditCampaign";

const CampaignInformation = () => {
  let location = useLocation();
  const {
    campaignName,
    id,
    campaignDescription,
    campaignStatus,
    dailyDigest,
    digestCampaign,
    endDate,
    linkedKeywords,
    startDate,
    view,
    edit,
  } = { ...location.state };
  const [viewVal, setViewVal] = useState(view);
  const [editVal, setEditVal] = useState(edit);

  
 

  return (
    <Layout>
      <div className="px-[85px] py-9">
        <Header
          campaignStatus={campaignStatus}
          heading={"Campaign Information"}
        />
        {editVal && <EditCampaign 
         campaignName={campaignName}
         campaignDescription={campaignDescription}
         campaignStatus={campaignStatus}
         dailyDigest={dailyDigest}
         digestCampaign={digestCampaign}
         endDate={endDate}
         linkedKeywords={linkedKeywords}
         startDate={startDate}
         id={id}
        />}
       
        {viewVal && (
          <ViewCampaign
            campaignName={campaignName}
            campaignDescription={campaignDescription}
            campaignStatus={campaignStatus}
            dailyDigest={dailyDigest}
            digestCampaign={digestCampaign}
            endDate={endDate}
            linkedKeywords={linkedKeywords}
            startDate={startDate}
            id={id}
            setEditVal={setEditVal}
            setViewVal={setViewVal}
          />
        )}
      </div>
     
    </Layout>
  );
};

export default CampaignInformation;
