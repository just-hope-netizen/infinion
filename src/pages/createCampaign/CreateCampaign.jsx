import Layout from "@/components/Layout";
import CampaignForm from "@/components/CampaignForm";
import axios from "axios";
import { useState } from "react";
import Modal from "@/components/Modal";

const CreateCampaign = () => {
  
  const [openModal, setOpenModal] = useState(false);
  const sendData = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "https://infinion-test-int-test.azurewebsites.net/api/Campaign",
        data
      );
      if (res.status === 200 || res.status === 201) {
        setOpenModal(true);
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="px-[85px] py-9">
        <h1 className="font-[900] text-[24px] text-primary ">
          Create New Campaign
        </h1>

        <CampaignForm sendData={sendData} />
      </div>
      <Modal openModal={openModal}
      setOpenModal={setOpenModal}
      content={'Campaign Successfully Created'}
      />
    </Layout>
  );
};

export default CreateCampaign;
