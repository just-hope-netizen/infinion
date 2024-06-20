import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { useState } from "react";
import Header from "./Header";
import CampaignForm from "@/components/campaign-form";
import DeleteCampaign from "../DeleteCampaign";
import axios from "axios";
import Modal from "@/components/Modal";

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
   
  } = { ...location.state };
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const updateData = async (data) => {
    try {
      const res = await axios.put(
        `https://infinion-test-int-test.azurewebsites.net/api/Campaign/${id}`, data,
        {
          headers: {
            'accept': "*/*",
            'Content-Type': 'application/json'

          },
        }
      );
      if (res.status === 200 || res.status === 204) {
        setOpenModal(true);
      } else {
        alert(res);
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    setOpenDeleteModal(true);
  };
 

  return (
    <Layout>
      <div className="px-[85px] py-9">
        <Header
          campaignStatus={campaignStatus}
          heading={"Campaign Information"}
        />
       <CampaignForm
        sendData={updateData}
        setOpenDeleteModal={setOpenDeleteModal}
        campaignName={campaignName}
        campaignDescription={campaignDescription}
        dailyDigest={dailyDigest}
        digestCampaign={digestCampaign}
        endDate={endDate}
        linkedKeywords={linkedKeywords}
        startDate={startDate}
        id={id}
        badButton={deleteHandler}
      />
      <DeleteCampaign
        id={id}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
      <Modal openModal={openModal}
      setOpenModal={setOpenModal}
      content={'Campaign Successfully Updated'}
      />
       
     
      </div>
     
    </Layout>
  );
};

export default CampaignInformation;

