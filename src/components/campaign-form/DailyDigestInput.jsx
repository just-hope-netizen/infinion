
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const DailyDigestInput = ({formData, setFormData, id}) => {
  return (
    <div>
        <Select
          required={true}
          value={formData.dailyDigest}
          onValueChange={(value) =>
            setFormData({
              ...formData,
              dailyDigest: value,
            })
          }
        >
          <span>Kindly select how often you want to receive daily digest</span>
          <SelectTrigger className={`${id ? "w-full" : "w-[180px] mt-2"}    focus:ring-0 `}>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>
  )
}

export default DailyDigestInput