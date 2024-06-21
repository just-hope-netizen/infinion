import React from 'react'

const LinkedKeywords = ({linkedKeywords, handleFormData}) => {
  return (
    <div>
            <label htmlFor="linkedKeywords">
              Linked Keywords
              <span className=" text-[#FF0000]">*</span>
            </label>
            <textarea
              className="w-full border p-2.5  h-28 mt-1 rounded resize-none focus:outline-none"
              placeholder="To add keywords, type your keyword and press enter"
              id="linkedKeywords"
              name="linkedKeywords"
              required={true}
              value={linkedKeywords}
              onChange={handleFormData}
            ></textarea>
            {/* <div className="mt-1 w-full h-[112px] py-[10px] pl-[10px]  text-[#999999] border rounded">
            {formData.linkedKeywords &&
              formData?.linkedKeywords?.map((i, index) => (
                <Button
                  className="text-white h-[24px] px-2 mr-1"
                  key={index}
                  onClick={() => console.log("dv")}
                >
                  {i}
                </Button>
              ))}
            <input
              placeholder="To add keywords, type your keyword and press enter"
              id="linkedKeywords"
              name="linkedKeywords"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              // required={true}
            //   onChange={handleFormData}
            />
          </div> */}
          </div>
  )
}

export default LinkedKeywords