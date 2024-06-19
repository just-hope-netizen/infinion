import DataTable from "react-data-table-component";

function clickHandler(e) {
  console.log(e);
}

const columns = [
  {
    name: "Title",

    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    button: true,
    cell: (row) => (
      <a
        href={row.posterUrl}
        onClick={()=> clickHandler(row)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download 
      </a>
    ),
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const Table = ({}) => {
  return <DataTable columns={columns} data={data} />;
};
export default Table;

