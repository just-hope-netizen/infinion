import { Search } from "lucide-react";

import { Input } from "./ui/input";


const SearchBox = ({placeholder, className}) => {
  return (

  <div className={`relative ${className ? className :" max-w-[391px]"} w-full`}>
    <Input type='text' placeholder={`${placeholder ? placeholder : 'Search for anything...'}`} className=' h-[44px] border '/>
    <Search className="absolute top-4 right-2 h-4"/>
  </div>

  );
};

export default SearchBox;
