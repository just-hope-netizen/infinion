import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const LinkedKeywords = ({ linkedWordsValue, setLinkedWordsValue }) => {
  const [inputValue, setInputValue] = useState("");
  
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue.trim() !== '') {
        setLinkedWordsValue([...linkedWordsValue, inputValue]);

        setInputValue('');
      }
    }
  }
    function cancelHandler(e, index) {
      e.preventDefault();
         const newItems = linkedWordsValue.filter((_, i) => i !== index);
      setLinkedWordsValue(newItems)
    }

  return (
    <div>
      <label htmlFor="linkedKeywords">
        Linked Keywords
        <span className=" text-[#FF0000]">*</span>
      </label>
     
      <div className="mt-1 w-full h-[112px] py-[10px] pl-[10px]  text-[#999999] border rounded">
        {linkedWordsValue?.map((i, index) => (
          <Button
            className="text-white h-[24px] px-2 mr-1"
            key={index}
            type="button"
          >
            {i}
            <X onClick={(e) => cancelHandler(e, index)}  className="h-4 w-5"/>
          </Button>
        ))}
        <input
          placeholder="To add keywords, type your keyword and press enter"
          id="linkedKeywords"
          name="linkedKeywords"
          className="focus:outline-none w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          required={linkedWordsValue.length >= 1 ? false : true}
        />
      </div>
    </div>
  );
};

export default LinkedKeywords;
