/* eslint-disable react/prop-types */
import { useState } from "react";
import CampaignForm from "@/components/CampaignForm";
import DeleteCampaign from "../DeleteCampaign";
import axios from "axios";
import Modal from "@/components/Modal";

const EditCampaign = ({
  id,
  campaignName,
  campaignDescription,
  dailyDigest,
  digestCampaign,
  endDate,
  linkedKeywords,
  startDate,
}) => {
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
      console.log(res);
      if (res.status === 200 || res.status === 204) {
        setOpenModal(true);
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
    </>
  );
};

export default EditCampaign;
