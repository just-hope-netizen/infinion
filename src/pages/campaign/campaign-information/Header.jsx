/* eslint-disable react/prop-types */
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = ({campaignStatus, heading}) => {
  return (
    <header className='max-w-[684px]'>
          <Link to={"/campaign"} className="  flex items-center mb-6  w-fit">
          <ArrowLeft className='h-4'/>
            Back
          </Link>
    <div className="flex justify-between">
      <h1 className="font-[900] text-[24px] text-primary ">
       {heading}
      </h1>
      <div className="flex items-center py-2 px-4   bg-[#EDF0F0] rounded">
        <span className=" pr-[7px] border-r border-black"> Campaign Status</span>
        <span className={`${campaignStatus === 'active' ?"text-[#009918]" :"text-[#990000]" } ml-4`}>

        {campaignStatus}
        </span>
      </div>
    </div>
  </header>
  )
}

export default Header