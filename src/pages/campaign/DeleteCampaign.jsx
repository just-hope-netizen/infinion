/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const DeleteCampaign = ({id, openDeleteModal, setOpenDeleteModal}) => {

    const deleteCampaign = async () => {
        try {
          const res = await axios.delete(
            `https://infinion-test-int-test.azurewebsites.net/api/Campaign/${id}`,
            {
              headers: {
                accept: "*/*",
              },
            }
          );
    
          if (res.status === 200 || res.status === 201) {
            console.log(res);
            // setOpenModal(true);
          } else {
            console.log(res);
          }
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <Dialog
    open={openDeleteModal}
    onOpenChange={(open) => setOpenDeleteModal(open)}
  >
    <DialogContent className="max-w-[572px]">
      <div className="my-[72px] mx-auto w-fit flex items-center flex-col">
        <p className="mb-[57px] font-semibold text-[18px] ">
          Stop Campaign
        </p>
        <p className="mb-[57px]  text-center">
          <span className="block">
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
            onClick={deleteCampaign}
            className="w-[126px]  flex items-center justify-center border border-[#990000] h-10 bg-[#990000] text-white hover:bg-[#990000]"
          >
            {" "}
            Delete Campaign
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
  )
}

export default DeleteCampaign