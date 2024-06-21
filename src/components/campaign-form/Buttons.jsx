/* eslint-disable react/prop-types */
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

const Buttons = ({ id, badButton, disabled }) => {
  return (
    <div>
      <Button
        type="button"
        onClick={badButton}
        className={`px-[76px] py-[10px] mt-[45px] ${
          id
            ? " bg-[#990000] hover:bg-[#990000] text-white border border-[#990000]"
            : " text-primary bg-white hover:bg-white"
        } font-semibold  border border-primary`}
      >
        {id ? "Stop Campaign" : " Cancel"}
      </Button>
      <Button
        disabled={disabled ? true: false}
        type="submit"
        className={`px-[42.5px] ml-6 font-semibold py-[10px] relative ${
          id
            ? "text-primary border border-primary bg-white hover:bg-white"
            : "text-white "
        } 

    `}
      >
        {disabled &&
          <Loader2 className="absolute left-2 animate-spin" />
        }
        {id ? "Update Information" : "    Create Campaign"}
      </Button>
    </div>
  );
};

export default Buttons;
