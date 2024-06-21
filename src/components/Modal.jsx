/* eslint-disable react/prop-types */
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SuccessIcon from "../assets/svg/SuccessIcon.svg";
import { Link } from "react-router-dom";

const Modal = ({ openModal, setOpenModal, content }) => {
  const avoidDefaultDomBehavior = (e) => {
    e.preventDefault();
  };
  return (
    <Dialog open={openModal} onOpenChange={(open) => setOpenModal(open)}>
      <DialogContent
        className="max-w-[550px]"
        onPointerDownOutside={avoidDefaultDomBehavior}
        onInteractOutside={avoidDefaultDomBehavior}
      >
        <div className="mt-[96px] mb-[72px] mx-auto w-fit flex items-center flex-col">
          <img src={SuccessIcon} alt="success icon" className="w-[90px]" />
          <p className="mt-[48px] font-medium">{content}</p>
          <Link
            to={"/campaign"}
            className="bg-[#247B7B] text-white flex items-center justify-center rounded  mt-[48px] h-[48px] w-[229px]  "
          >
            Go Back to campaign list
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
