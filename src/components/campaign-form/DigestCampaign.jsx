import { Switch } from "../ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const DigestCampaign = ({formData, setFormData, id}) => {
  return (
    <>
    {id ? (
        <div className="mt-4">
          <Select
            required={true}
            name="digestCampaign"
            value={formData.digestCampaign}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                digestCampaign: value,
              })
            }
          >
            <span>Want to receive daily Campaign about the campaign?</span>
            <SelectTrigger className=" mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"Yes"}>
               Yes
              </SelectItem>
              <SelectItem
                value={"No"}
              >
                No
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      ) : (
        <div className="flex justify-between py-[10px]">
          <p>Want to receive daily digest about the campaign?</p>

          <Switch
            name="digestCampaign"
            checked={formData.digestCampaign}
            onCheckedChange={(checked) =>
              setFormData({
                ...formData,
                digestCampaign: checked,
            })
        }
          />
        </div>
      )}
        </>
  )
}

export default DigestCampaign