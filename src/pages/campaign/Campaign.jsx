/* eslint-disable react/prop-types */
import Layout from "@/components/Layout";
import SearchBox from "@/components/Search";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DeleteCampaign from "./DeleteCampaign";

const paginationComponentOptions = {
  rowsPerPageText: "showing 10 of 40 results",
  // rangeSeparatorText: "of aijd"
};

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "#F0F4F4",
      borderBottomWidth: "0",
      color: "black",
    },
  },
};

const Campaign = () => {
  const [data, setData] = useState([]);
  const [campaignId, setCampaignId] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const navigate = useNavigate();
  const inActiveUsers = data.filter((i) => i.campaignStatus === "Inactive");
  const activeUsers = data.filter((i) => i.campaignStatus === "active");
  const numInActiveUsers = inActiveUsers.length
  const numActiveUsers = activeUsers.length
  const totalNumUsers = data.length
  const columns = [
    {
      name: <h4 className="text-[#455454] font-[900]">S/N</h4>,
      selector: (row) => row.id,
      width: "175px",
    },
    {
      name: <h4 className="text-[#455454] font-[900]">Campaign Name</h4>,
      selector: (row) => row.campaignName,
      width: "175px",
    },
    {
      name: <h4 className="text-[#455454] font-[900]">Start Date</h4>,
      selector: (row) => new Date(row.startDate).toLocaleDateString("en-GB"),
      width: "175px",
    },
    {
      name: <h4 className="text-[#455454] font-[900]">Status</h4>,
      selector: (row) => row.campaignStatus,
      width: "175px",
      conditionalCellStyles: [
        {
          when: (row) => row.campaignStatus === "Active",
          style: {
            color: "#009918",
            fontWeight: "900",
          },
        },
        {
          when: (row) => row.campaignStatus === "Inactive",
          style: {
            color: "#990000",
            fontWeight: "900",
          },
        },
      ],
    },
    {
      name: <h4 className="text-[#455454] font-[900]">Actions</h4>,
      ignoreRowClick: true,
      button: true,
      cell: (row) => (
        <div className="flex gap-6">
          <Eye
            className=" cursor-pointer"
            onClick={() =>
              navigate("/campaign-information", {
                state: { ...row, view: true },
              })
            }
          />
          <SquarePen
            className=" cursor-pointer"
            onClick={() =>
              navigate("/campaign-information", {
                state: { ...row, edit: true },
              })
            }
          />
          <Trash2
            className=" cursor-pointer"
            onClick={() => {
              setCampaignId(row.id);
              setOpenDeleteModal(true);
              console.log(row);
            }}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://infinion-test-int-test.azurewebsites.net/api/Campaign"
        );
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          setData(res.data);
        } else {
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="px-[85px] py-9">
        <h1 className="font-[900] text-[24px] mb-6 text-primary ">
          ALL Campaign
        </h1>
        <header className="flex justify-between mb-[37px]">
          <div className="flex gap-4">
            <h4 className="p-[10px] border border-primary rounded text-primary w-fit">
              All ({totalNumUsers})
            </h4>
            <h4 className="p-[10px] border border-primary rounded text-primary w-fit">
              Inactive ({numInActiveUsers})
            </h4>
            <h4 className="p-[10px] border border-primary rounded text-primary w-fit">
              Active ({numActiveUsers})
            </h4>
          </div>
          <div className="flex">
            <SearchBox placeholder="search" className={"max-w-[225px]"} />
            <div className=" border  rounded flex items-center justify-between ml-7 whitespace-nowrap px-3 max-w-[227px] w-full">
              <span className="text-gray-400">Filter by date,</span>
              <ChevronDown />
            </div>
          </div>
        </header>
        <DataTable
          columns={columns}
          data={data}
          pagination
          customStyles={customStyles}
          paginationComponentOptions={paginationComponentOptions}
          persistTableHead
        />
      </div>
      <DeleteCampaign
        id={campaignId}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
    </Layout>
  );
};

export default Campaign;
