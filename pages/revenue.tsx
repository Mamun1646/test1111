import { UseInput } from "@/components/Shared/InputText";
import Table from "@/components/Shared/Table";
import {
  RevenueFormType,
  Search,
  SearchData,
  UpdateType,
} from "type/interfaces";
import Button from "@/components/Shared/Button";
import { useCallback, useEffect, useState,useRef, RefObject  } from "react";
import { initializeRevenueForm, initialUpdateForm } from "type/initializeValue";
import { revenueInputField, updateRevenueExpenditureForm } from "type/totalFormField";
import { RevenueService } from "services/revenue.service";
import { Navbar } from "@/components/Shared/Navbar";
import { DeleteModel } from "@/components/Shared/DeleteModel";
import { UpdateModal } from "@/components/Shared/UpdateModel";
import { getSession } from "next-auth/react";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";


export default function Revenue1() {
  const router =useRouter()
//for top scroll 
const divRef = useRef<HTMLDivElement>(null);
const topScroll=()=>{
  if (divRef.current !== null) {divRef.current.scrollIntoView()}
}

// const executeScroll = () => topRef.current.scrollIntoView()   
  // revenue table head
  const tableHead: string[] = ["Date", "Revenue Name", "Amount(Tk)", "Action"];

  //list and form control
  const [hasList, setHasList] = useState<boolean>(true);

  //Table data state
  const [Data, setData] = useState();
  const tableContent: any = Data;
  const tableName = "Revenue";
  //form controll section
  const [formData, setFormData] = useState<RevenueFormType>(
    initializeRevenueForm
  );

  //recieve search keyword from child component(table)
  const [searchKey, setSearchKey] = useState<Search>({
    text: "",
    date: "",
  });
  const handleSearch = async (searchData: SearchData) => {
    // const res = await RevenueService.getSearchResult(searchData.text,searchData.date, 1);

    setSearchKey(searchData);
  };
  //getSearch Result
  const handleSearchPagnation = useCallback(
    async (e: any, value: number) => {
      setPageNumber(value);

      const res = await RevenueService.getSearchResult(
        searchKey.text,
        searchKey.date,
        value
      );

      setData(res.revenue);
    },
    [Data]
  );

  //getRevenueList
  //For pagination,Limit and Page State
  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalRecord, setTotalRecord] = useState(1);
  const handlePanination = useCallback(
    async (e: any, value: number) => {
      setPageNumber(value);
      const res = await RevenueService.getRevenueList(limit, value);
      setTotalRecord(res.totalRecord);
      setData(res.revenue);
    },
    [hasList]
  );

  //fetch revenue list function
  async function fetchData() {
    const res = await RevenueService.getRevenueList(limit, pageNumber);
    setTotalRecord(res.totalRecord);
    setData(res.revenue);
  }

  //unique title check state
  const [hasUniqueTitle, setHasUniqueTitle] = useState<string>("");
  //handle reset form data
  const handleReset = () => {
    setFormData(initializeRevenueForm);
    setHasUniqueTitle("");
    topScroll()
  };

  //handle submit

  const handleSubmit = async () => {
    const res = await RevenueService.createRevenueList(formData);
    setHasUniqueTitle(res.Message);
    topScroll()
  };

  //handle Delete
  const [deleteMessage, setDeleteMessage] = useState("");

  // Delete Model Child Component
  const [deleteID, setDeleteID] = useState<number>(0);
  //confirmation delte
  const [isConfirmDelete, setIsConfirmDelete] = useState<boolean>(false);
  const hadleDelete = useCallback(
    async (event: any) => {
      setIsConfirmDelete(true);

      const ID: number = event.target.value;

      setDeleteID(ID);
    },
    [isConfirmDelete]
  );

  //if revenue will delete again data will be fetch

  //label placeholder type and form state handle in this section
  const label = "";
  const placeholder = "";
  const titleType = "text";
  const numberType = "number";
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type } = event.target;

    const value =
      type === "number"
        ? Math.max(0, Math.min(100000000000, Number(event.target.value)))
        : event.target.value;
    setHasUniqueTitle("");
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  useEffect(() => {
    fetchData();
  }, [hasList]);
  //control add new form usecallBack hook
  const handleAddNew = useCallback(() => {
    setHasList(false);
    fetchData();
  }, [hasList]);
  const applySearch = async () => {
    const res = await RevenueService.getSearchResult(
      searchKey.text,
      searchKey.date,
      1
    );
    setTotalRecord(res.totalRecord);
    setData(res.revenue);
  };

  //Final Delete Confermation Call and Delete Record
  const handleConfirm = async () => {
    const response = await RevenueService.deleteRevenueOne(deleteID);
    setIsConfirmDelete(false);
    setDeleteMessage(response.Message);
    fetchData();
  };

  // Delete Model Child Component End

  const [updateRevenue, setUpdateRevenue] = useState<{
    id: number;
    title: string;
    value: number;
    date: Date;
  }>(initialUpdateForm);
  const [hasUpdateForm, setHasUpdateForm] = useState<boolean>(false);
  const handleUpdateCallback = useCallback(
    async (event: any) => {
      const revenue = await RevenueService.getRevenueOne(event.target.value);
      setUpdateRevenue(revenue);
      setHasUpdateForm(true);
    },
    [updateRevenue]
  );
  //Don't need and unwanted
  const handleViewCallback = useCallback(
    async (event: any) => {
     
    },
    [updateRevenue]
  );

  ///Update model action control
  const handleUpdateSave = async (update: UpdateType) => {
    const updated = await RevenueService.updateRevenue(
      updateRevenue.id,
      update
    );
    fetchData();
    setHasUpdateForm(false);
  };

  //cancel update button
  const handleCancelUpdateModel = () => {
    setHasUpdateForm(false);
  };

  //cancel function for delete button
  const handleCancelDeleteModel = () => {
    setIsConfirmDelete(false);
  };
 //Authentication Section
 const [loading,setLoading]=useState<boolean>(true)

 useEffect(()=>{
   const securePage=async()=>{
     const session=await getSession()
    
     if(!session){
       router.push("/auth/singin")
     }
     else setLoading(false)
   }
   securePage()
 },[])
 if(loading) <p>Loading...........</p>
  return (
    <>
      {isConfirmDelete ? (
        <DeleteModel
          handleCancelDeleteModel={handleCancelDeleteModel}
          deleteModelFunc={handleConfirm}
        />
      ) : (
        ""
      )}
      {hasUpdateForm && (
        <UpdateModal
        updateFormControl={updateRevenueExpenditureForm}
          handleUpdateSave={handleUpdateSave}
          update={updateRevenue}
          handleCancel={handleCancelUpdateModel}
        />
      )}
      {hasList ? (
        <>
          <Table
            tableHead={tableHead}
            tableContent={tableContent}
            tableName={tableName}
            addNew={handleAddNew}
            deleteCallBack={hadleDelete}
            paginationCallBack={handlePanination}
            searchCallBack={handleSearchPagnation}
            page={2}
            totalRecord={totalRecord}
            handleSearch={handleSearch}
            applySearch={applySearch}
            handleViewCallback={handleViewCallback}
            handleUpdateCallback={handleUpdateCallback}
          />
        </>
      ) : (
        ""
      )}
      {!hasList ? (
        <div  className="w-4/5 xl:ml-64 px-8 py-6 mx-auto">
          {/* table 1 */}
          <Navbar breadcrumbName={tableName} />
          <div className="flex flex-wrap -mx-3 ml-4">
            <div className="flex-none w-full max-w-full px-3">
              <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div ref={divRef} className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  
                </div>
                <div className="mb-10">
                  {hasUniqueTitle === "false" && (
                    <p className="text-green-800 text-xl text-center">
                      Successfully Submited
                    </p>
                  )}
                  {hasUniqueTitle === "true" && (
                    <p className="text-red-800 text-xl text-center">
                      Please Type Unique Title!!!!!!!!!{" "}
                    </p>
                  )}
                  <div   className="items-center">
                  <div className=" ml-10 flex">
                      <div className="w-118">
                      <UseInput
                        label={"Current Date"}
                        placeholder={"Date"}
                        type={"Date"}
                        value={formData["date"]}
                        name={"date"}
                        required
                        onChange={handleChange}
                      />
                      </div>
                      <Button
                        className={"btn btn-outline btn-primary w-34 mt-5 ml-auto mr-68"}
                        text={"list"}
                        onClick={() => setHasList(true)}
                      />
                    </div>
                    <form  className="w-full  ml-10">
                     
                      <div className="flex flex-wrap -mx-3 mb-6">
                        {revenueInputField.map((property, indx) => (
                          <div
                            key={indx}
                            className="w-120 md:w-120 px-3 mb-6 mr-10 md:mb-0"
                          >
                            <UseInput
                              label={label}
                              placeholder={placeholder}
                              type={indx % 2 ? numberType : titleType}
                              value={formData[property]}
                              name={property}
                              onChange={handleChange}
                            />
                          </div>
                        ))}
                      </div>
                    </form>
                    <div className="flex">
                      <Button
                        text={"Reset"}
                        className={"btn   btn-outline btn-warning w-34 ml-auto mr-2"}
                        onClick={handleReset}
                      />
                      <Button
                        text={"Submit"}
                        className={"btn mr-68 btn-outline w-34 btn-primary  "}
                        onClick={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}





// export const getServerSideProps: GetServerSideProps = async () => {
//   const limit=10;
//   const pageNumber=1;
//   const res = await RevenueService.getRevenueList(limit, pageNumber);
//   return {
//     props: {
//       res

//     } 
//     },
// }