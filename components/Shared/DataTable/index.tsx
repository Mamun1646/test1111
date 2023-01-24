import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import Header from "../Layout/Header";
interface Row{
  id: number;
  title: string;
  year: string;
}

interface col {
  name: string;
  selector: (row: Row) => string;
}
export const TableData = () => {


    //   Internally, customStyles will deep merges your customStyles with the default styling.
    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                
            },
        },
        rdt_Table:{
          style: {
            borderRadius:'5px'
            
        },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };




  //State for Searching
  const [search, setSearch] = useState("");
  const [filterData,setFilterData]=useState<Row[]>([])

 
  const users: Row[] = [
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
    {
      id: 3,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 12,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 21,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 32,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 41,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 52,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 61,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 72,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 81,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 92,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 101,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 112,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 121,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 132,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 114,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 152,
      title: "Ghostbusters",
      year: "1984",
    },
  ];
  
const tableHead=["title","year","date","action"]

  const col: col[] = 
    
  tableHead.map((user,indx)=>{ return {name:user.toUpperCase(), selector:(row:Row)=>Object.values(row)[indx]}})
   
  ;

  //Filter Data Function call 
useEffect(()=>{
 const result =users.filter((person)=>person.title.toLowerCase().match(search.toLowerCase())
 )
setFilterData(result)

},[search])

  return (
    <div>
      <Header/>
    <div className="w-2/3  xl:ml-68 px-6 py-6 mx-auto rounded-lg">
        <div>
      <DataTable
        selectableRows
        title="Revenue"
        // fixedHeaderScrollHeight="400px"
        pagination
        columns={col}
        selectableRowsHighlight
        highlightOnHover
        data={filterData}
        customStyles={customStyles}
        // actions={<button className="text-green-900">Export</button>}
        subHeader
        subHeaderComponent={
          <input
            type="text"
            className="border border-1"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="search here"
          ></input>
        }
      />
      </div>
    </div>
    </div>
  );
};
