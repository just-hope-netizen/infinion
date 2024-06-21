import React from 'react'
import { DatePicker } from '../DatePicker'

const Dates = ({startDateVal, setStartDateVal, dateValidate, endDateVal, setEndDateVal}) => {
  return (
    <div className="flex  gap-6">
          <div className="w-full">
            <span className=" block mb-1">
              Start Date
              <span className=" text-[#FF0000]">*</span>
            </span>
            <DatePicker
              date={startDateVal}
              setDate={setStartDateVal}
              required={true}
            />
            {startDateVal
              ? null
              : dateValidate.startDateError && (
                  <span className="text-[#FF0000]">
                    {" "}
                    This field is required
                  </span>
                )}
          </div>
          <div className="w-full">
            <span className=" block mb-1">
              End Date
              <span className=" text-[#FF0000]">*</span>
            </span>
            <DatePicker
              date={endDateVal}
              setDate={setEndDateVal}
              required={true}
            />
            {endDateVal
              ? null
              : dateValidate.endDateError && (
                  <span className="text-[#FF0000]">
                    {" "}
                    This field is required
                  </span>
                )}
          </div>
        </div>
  )
}

export default Dates