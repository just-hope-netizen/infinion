
const InputDes = ({handleFormData, des}) => {
  return (
    <div>
        <label htmlFor="campaignDescription">
          Campaign Description
          <span className=" text-[#FF0000]">*</span>
        </label>
        <textarea
          className="w-full border focus:outline-none p-2.5  h-[112px] rounded mt-1 resize-none"
          placeholder="Please add a description to your campaign"
          id="campaignDescription"
          name="campaignDescription"
          required={true}
          value={des}
          onChange={handleFormData}
        ></textarea>
      </div>
  )
}

export default InputDes