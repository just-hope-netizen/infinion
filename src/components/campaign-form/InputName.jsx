import React from 'react'
import { Input } from '../ui/input'

const InputName = ({handleFormData, name}) => {
  return (
    <div className=" pt-[10px]">
    <label htmlFor="campaignName">
      Campaign Name
      <span className=" text-[#FF0000]">*</span>
    </label>
    <Input
      placeholder="e.g  The Future is now"
      required={true}
      name="campaignName"
      value={name}
      onChange={handleFormData}
      className="mt-1  focus:ring-ring-0"
    />
  </div>
  )
}

export default InputName