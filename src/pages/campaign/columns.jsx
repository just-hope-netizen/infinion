import { Button } from "@/components/ui/button";
import { Delete, DeleteIcon, Eye, SquarePen, Trash2 } from "lucide-react";

const editHandler = (row) => {
    console.log(row);
}

export const columns = [
  {
    name: <h4 className="text-[#455454] font-[900]">S/N</h4>,
    selector: (row) => row.name,
  },
  {
    name: "Campaign Name",
    selector: (row) => row.name,
  },
  {
    name: "Start Date",
    selector: (row) => row.name,
  },
  {
    name: "Status",
    selector: (row) => row.name,
  },
  {
    name: "Actions",
    button: true,
    cell: (row) => (
      <div className="flex gap-6">
        <Eye onClick={()=> editHandler(row)}/>
        <SquarePen />
        <Trash2 />
      </div>
    ),
  },
];
