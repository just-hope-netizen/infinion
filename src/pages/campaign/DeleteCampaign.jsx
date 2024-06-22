import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteData } from "@/lib/api";
import { ToastContainer, toast } from "react-toastify";

const DeleteCampaign = ({ id, openDeleteModal, setOpenDeleteModal }) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const navigate = useNavigate();
  
  const deleteHandler = () => {
    setIsBtnDisabled(true);
    deleteData(id).then((res) => {
      if (res.status === 200 || res.status === 204) {
        toast("No network now, refresh and retry!");
        setOpenDeleteModal(false);
        setIsBtnDisabled(false);
        navigate("/");
      } else {
        toast.error("No network now, refresh and retry!");
        setIsBtnDisabled(false);
      }
    });
  };
  const avoidDefaultDomBehavior = (e) => {
    e.preventDefault();
  };
  return (
    <Dialog
      open={openDeleteModal}
      onOpenChange={(open) => setOpenDeleteModal(open)}
    >
      <DialogContent
        className="max-w-[572px]"
        onPointerDownOutside={avoidDefaultDomBehavior}
        onInteractOutside={avoidDefaultDomBehavior}
      >
        <div className="my-[72px] mx-auto w-fit flex items-center flex-col">
          <p className="mb-[57px] font-semibold text-[18px] ">Stop Campaign</p>
          <p className="mb-[57px]  text-center">
            <span className="block" >
              Are You sure you want to delete MTN campaign?
            </span>
            <span>This action cannot be undone.</span>
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => setOpenDeleteModal(false)}
              className="w-[110px] font-semibold  flex items-center justify-center border border-black text-black h-10 bg-white hover:bg-white"
            >
              {" "}
              Cancel
            </Button>
            <Button
              disabled={isBtnDisabled || false}
              onClick={deleteHandler}
              className="w-[126px]  flex items-center justify-center border border-[#990000] h-10 bg-[#990000] text-white hover:bg-[#990000]"
            >
              {" "}
              Delete Campaign
            </Button>
      <ToastContainer />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCampaign;
