import { UseInput } from "@/components/Shared/InputText";
import Table from "@/components/Shared/Table";
import {
  ExpenditureFormType,
  Search,
  SearchData,
  UpdateType,
} from "type/interfaces";
import Button from "@/components/Shared/Button";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  initializeExpenditureForm,
  initialUpdateForm,
} from "type/initializeValue";
import {
  expenditureInputField,
  updateRevenueExpenditureForm,
} from "type/totalFormField";
import { Navbar } from "@/components/Shared/Navbar";
import { DeleteModel } from "@/components/Shared/DeleteModel";
import { UpdateModal } from "@/components/Shared/UpdateModel";
import { ExpenditureService } from "services/expenditure.service";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";


export default function Expenditure1() {
  const router =useRouter()

//for top scroll 
const divRef = useRef<HTMLDivElement>(null);
const topScroll=()=>{
  if (divRef.current !== null) {divRef.current.scrollIntoView()}
}

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
  // Expenditure table head
  const tableHead: string[] = [
    "Date",
    "Expenditure Name",
    "Amount(Tk)",
    "Action",
  ];

  //list and form control
  const [hasList, setHasList] = useState<boolean>(true);

  //Table data state
  const [Data, setData] = useState();
  const tableContent: any = Data;
  const tableName = "Expenditure";
  //form controll section
  const [formData, setFormData] = useState<ExpenditureFormType>(
    initializeExpenditureForm
  );

  //recieve search keyword from child component(table)
  const [searchKey, setSearchKey] = useState<Search>({
    text: "",
    date: "",
  });
  const handleSearch = async (searchData: SearchData) => {
    // const res = await ExpenditureService.getSearchResult(searchData.text,searchData.date, 1);

    setSearchKey(searchData);
  };
  //getSearch Result

  const handleSearchPagnation = useCallback(
    async (e: any, value: number) => {
      setPageNumber(value);
      const res = await ExpenditureService.getSearchResult(
        searchKey.text,
        searchKey.date,
        value
      );

      setTotalRecord(res.totalRecord);
      setData(res.expenditure);
    },
    [Data]
  );
 
  //getExpenditureList
  //For pagination,Limit and Page State
  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalRecord, setTotalRecord] = useState(1);
  const handlePanination = useCallback(
    async (e: any, value: number) => {
      setPageNumber(value);
      const res = await ExpenditureService.getExpenditureList(limit, value);
      setTotalRecord(res.totalRecord);
      setData(res.expenditure);
    },
    [hasList]
  );

  //fetch expenditure list function
  async function fetchData() {
    const res = await ExpenditureService.getExpenditureList(limit, pageNumber);
    setTotalRecord(res.totalRecord);
    setData(res.expenditure);
  }

  //unique title check state
  const [hasUniqueTitle, setHasUniqueTitle] = useState<string>("");
  //handle reset form data
  const handleReset = () => {
    setFormData(initializeExpenditureForm);
    setHasUniqueTitle("");
    topScroll()
  };

  //handle submit

  const handleSubmit = async () => {
    const res = await ExpenditureService.createExpenditureList(formData);
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

  //if expenditure will delete again data will be fetch

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
    const res = await ExpenditureService.getSearchResult(
      searchKey.text,
      searchKey.date,
      1
    );
    setTotalRecord(res.totalRecord);
    setData(res.expenditure);
  };

  //Final Delete Confermation Call and Delete Record
  const handleConfirm = async () => {
    const response = await ExpenditureService.deleteExpenditureOne(deleteID);
    setIsConfirmDelete(false);
    setDeleteMessage(response.Message);
    fetchData();
  };

  // Delete Model Child Component End

  const [updateExpenditure, setUpdateExpenditure] = useState<{
    id: number;
    title: string;
    value: number;
    date: Date;
  }>(initialUpdateForm);
  const [hasUpdateForm, setHasUpdateForm] = useState<boolean>(false);
  const handleUpdateCallback = useCallback(
    async (event: any) => {
      const expenditure = await ExpenditureService.getExpenditureOne(
        event.target.value
      );
      setUpdateExpenditure(expenditure);
      setHasUpdateForm(true);
    },
    [updateExpenditure]
  );

  ///Update model action control
  const handleUpdateSave = async (update: UpdateType) => {
    const updated = await ExpenditureService.updateExpenditure(
      updateExpenditure.id,
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
  const [isViewModel,setIsViewModel]=useState(false)
  const handleViewCallback = useCallback(
    async (event: any) => {
      // const expenditure = await ExpenditureService.getExpenditureOne(
      //   event.target.value
      // );
      // setUpdateExpenditure(expenditure);
      setIsViewModel(true);
    },
    [isViewModel]
  );
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
          update={updateExpenditure}
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
            // page={2}
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
        <div className="w-4/5 xl:ml-64 px-8 py-6 mx-auto">
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
                  <div className="items-center">
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
                        className={"btn btn-outline btn-primary w-34 mt-5 ml-auto mr-64"}
                        text={"list"}
                        onClick={() => setHasList(true)}
                      />
                    </div>

                    <form className="w-full ml-10">
                     
                      <div className="flex flex-wrap -mx-3 mb-6">
                        {expenditureInputField.map((property, indx) => (
                          <div
                            key={indx}
                            className="w-120 md:w-120 mr-10 px-3 mb-6 md:mb-0"
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
                        className={"btn   btn-outline w-34 btn-warning ml-auto mr-2"}
                        onClick={handleReset}
                      />
                      <Button
                        text={"Submit"}
                        className={"btn btn-outline w-34 btn-primary mr-64"}
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
