import { Navbar } from "../Navbar";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Search, SearchData, TableType } from "type/interfaces";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Button from "../Button";
import currencyFormatter from 'currency-formatter'

interface Props {
  tableHead: string[];
  // tableContent: Expeness[];
  tableContent: any[];
  tableName: string;
  addNew: () => void;
  applySearch: () => void;
  deleteCallBack: (event: any) => Promise<void>;
  handleUpdateCallback: (event: any) => Promise<void>;
  handleViewCallback: (event: any) => Promise<void>;
  handleSearch: (searchData: SearchData) => void;
  paginationCallBack?: (event: any, value: number) => Promise<void>;
  searchCallBack?: (event: any, value: number) => Promise<void>;
  page?: number;
  totalRecord: number;
}

const Table: NextPage<Props> = ({
  tableHead,
  tableContent,
  totalRecord,
  paginationCallBack,
  searchCallBack,
  tableName,
  addNew,
  deleteCallBack,
  applySearch,
  handleSearch,
  handleUpdateCallback,
  handleViewCallback
}) => {
  const [filterData, setFilterData] = useState<TableType[]>([]);
  const [search, setSearch] = useState<Search>({
    text: "",
    date: "",
  });

  //Pagination function control normal pagnation and search pagination function
  const [hasSearch, setHasSearch] = useState(false);
  //search function
  const handleSearchKeyword = (event: any) => {
    setHasSearch(true);
    setSearch((search) => ({
      ...search,
      [event.target.name]: event.target.value,
    }));
  };

  //search keyword pass to parent
  useEffect(() => {
    handleSearch(search);
  }, [search]);

  //filter data

  useEffect(() => {
    setFilterData(tableContent);
    // const searchResult = tableContent.filter((expenses) =>
    //   expenses.title.toLowerCase().match(search.toLowerCase())
    // );
    // setFilterData(searchResult);
  }, [tableContent]);

  return (
    <div className="w-4/5 xl:ml-64 px-8 py-6 mx-auto">
      {/* table 1 */}
      <Navbar breadcrumbName={tableName} />
      <div className="flex flex-wrap -mx-3 ml-4">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              {/* <h6 className="dark:text-white font-serif ml-3">{tableName}</h6> */}
            </div>
            <div className="flex">
              <Button
                className="btn btn-sm w-34 btn-outline btn-primary ml-5"
                text={"Add New"}
                onClick={addNew}
              />

              <input
                type="text"
                className="border border-1  ml-auto  px-2 mr-2"
                placeholder="Search Here"
                name="text"
                autoComplete="off"
                value={search.text}
                onChange={handleSearchKeyword}
              />
              <input
                type="Date"
                className="border border-1px-2 mr-4"
                placeholder="Search"
                name={"date"}
                value={search.date}
                onChange={handleSearchKeyword}
              />
              <Button
                className="btn btn-sm btn-outline w-34 btn-primary mr-4"
                text={"Search"}
                onClick={applySearch}
              />
            </div>
            <div className="flex-auto h-140 px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-black">
                  <thead className="align-bottom">
                    <tr>
                      {/* working with table header */}

                      {tableHead.map((head, idx) => (
                        <th
                          key={idx}
                          className="px-6 py-3 font-medium text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none  dark:border-white/40   border-b-solid tracking-none whitespace-nowrap  opacity-70"
                        >
                          {head}
                        </th>
                      ))}

                      {/* working with table header */}
                    </tr>
                  </thead>
                  <tbody>
                    {filterData &&
                      filterData.map((data, key) => (
                        <tr key={key}>
                          {/* working with table header */}

                          {tableHead.map((headName, indx) => (
                            <td
                              key={indx}
                              className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                            >
                              <div className="flex px-2 py-1">
                                <div className="flex flex-col justify-center">
                                  <p className="mb-0 ml-2 text-md text-slate-600 leading-normal dark:text-white">
                                    {headName == "Action" ? (
                                      <>
                                          {indx>4 && <Button
                                          text="View"
                                          className="btn btn-xs  btn-outline mr-1 btn-success "
                                          onClick={handleViewCallback}
                                          value={Object.values(data)[0]}
                                        />}
                                        <Button
                                          text="Update"
                                          className="btn btn-xs  btn-outline btn-primary "
                                          onClick={handleUpdateCallback}
                                          value={Object.values(data)[0]}
                                        />
                                         <Button
                                          text="Delete"
                                          className="btn btn-xs btn-outline ml-1 btn-error "
                                          onClick={deleteCallBack}
                                          value={Object.values(data)[0]}
                                        />

                                      </>
                                    ) : (
                                    
                                      (headName==="Amount(Tk)") ?   currencyFormatter.format(Object.values(data)[indx+1], { code: 'BDT' }) :Object.values(data)[indx+1]
                                    )}
                                  </p>
                                </div>
                              </div>
                            </td>
                          ))}

                          {/* working with table header */}
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="items-center  lg:ml-120">
                  <Pagination
                    count={Math.ceil(totalRecord / 10)}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{
                          next: (props) => (
                            <span
                              style={{
                                border: "none",
                                color: "#000080",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "100%",
                              }}
                              {...props}
                            >
                              Next
                            </span>
                          ),

                          previous: (props) => (
                            <span
                              style={{
                                border: "none",
                                color: "#000080",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "100%",
                              }}
                              {...props}
                            >
                              Previous
                            </span>
                          ),
                        }}
                        {...item}
                      />
                    )}
                    onChange={hasSearch ? searchCallBack : paginationCallBack}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Table.propTypes = {};
export default Table;
