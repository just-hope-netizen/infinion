import Layout from "@/components/Layout";
import CampaignForm from "@/components/campaign-form/index";
import axios from "axios";
import { useState } from "react";
import Modal from "@/components/Modal";
import { ToastContainer, toast } from "react-toastify";
import { postData } from "@/lib/api";

const CreateCampaign = () => {
  window.scrollTo(0, 0);
  const [openModal, setOpenModal] = useState(false);
  const postHandler = (data) => {
    postData(data).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setOpenModal(true);
        toast.done("Campaign Created");
      } else {
        toast.info(res.message);
      }
    });
  };
  const notify = () => toast("Wow so easy!");
  return (
    <Layout>
      <h1 className="font-[900] text-[24px] text-primary ">
        Create New Campaign
        <button onClick={notify}>Notify!</button>
      </h1>

      <CampaignForm sendData={postHandler} />
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        content={"Campaign Successfully Created"}
      />
      <ToastContainer />
    </Layout>
  );
};

export default CreateCampaign;
