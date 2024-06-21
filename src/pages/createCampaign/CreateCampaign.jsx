import Layout from "@/components/Layout";
import CampaignForm from "@/components/campaign-form/index";
import axios from "axios";
import { useState } from "react";
import Modal from "@/components/Modal";
import { toast } from "react-toastify";

const CreateCampaign = () => {
  window.scrollTo(0, 0);
  const [openModal, setOpenModal] = useState(false);
  const sendData = async (data) => {
    try {
      const res = await axios.post(
        "https://infinion-test-int-test.azurewebsites.net/api/Campaign",
        data
      );
      if (res.status === 200 || res.status === 201) {
        setOpenModal(true);
        toast.done("gdh")
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
    
        <h1 className="font-[900] text-[24px] text-primary ">
          Create New Campaign
        </h1>

        <CampaignForm sendData={sendData} />
      <Modal openModal={openModal}
      setOpenModal={setOpenModal}
      content={'Campaign Successfully Created'}
      />
    </Layout>
  );
};

export default CreateCampaign;
