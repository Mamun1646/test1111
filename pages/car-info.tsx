import Table from "@/components/Shared/Table";
import { CarInfoFormType, Search, SearchData } from "type/interfaces";
import Button from "@/components/Shared/Button";
import { useCallback, useEffect,  useState } from "react";
import { initialzieCarInfoForm } from "type/initializeValue";
import { Navbar } from "@/components/Shared/Navbar";
import { DeleteModel } from "@/components/Shared/DeleteModel";

import { CarInfoService } from "services/carinfo.service";
import { CarInformationForm } from "@/components/CarInfo";
import { getSession } from "next-auth/react";
import {useRouter} from "next/router";
import { GetServerSideProps,NextPage } from "next";
import { CarInfoView } from "@/components/CarInfoView";


const  CarInfo=()=> {
const router =useRouter()

  //carInfo table head
  const tableHead: string[] = [
    "From",
    "Veichle Name",
    "Chassis No",
    "Engine No",
    "year Model",
    "Exporter Name",
    "Action",
  ];

  //list and form control
  const [hasList, setHasList] = useState<boolean>(true);

  //Table data state
  const [Data, setData] = useState();
  const tableContent: any = Data;
  const tableName = "CarInfo";

  //recieve search keyword from child component(table)
  const [searchKey, setSearchKey] = useState<Search>({
    text: "",
    date: "",
  });
  const handleSearch = async (searchData: SearchData) => {
    setSearchKey(searchData);
  };
  //getSearch Result
  const handleSearchPagnation = useCallback(
    async (e: any, value: number) => {
      setPageNumber(value);

      const res = await CarInfoService.getSearchResult(
        searchKey.text,
        searchKey.date,
        value
      );

      setData(res.carInfo);
    },
    [Data]
  );

  //getCarInfoList
  //For pagination,Limit and Page State
  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalRecord, setTotalRecord] = useState(1);

 
  const handlePanination = useCallback(
    async (e: any, value: number) => {
      setPageNumber(value);
      const res = await CarInfoService.getCarInfoList(limit, value);
      setTotalRecord(res.totalRecord);
      setData(res.carInfo);
    },
    [hasList]
  );



  
  //fetch  CarInfo list function
  async function fetchData() {
    const res = await CarInfoService.getCarInfoList(limit, pageNumber);
    setTotalRecord(res.totalRecord);
    setData(res.carInfo);
  }

  //unique title check state
  const [hasUniqueTitle, setHasUniqueTitle] = useState<string>("");

  //handle Delete
  const [deleteMessage, setDeleteMessage] = useState("");

  // Delete Model Child Component
  const [deleteID, setDeleteID] = useState<number>(0);
  //confirmation delte
  const [isConfirmDelete, setIsConfirmDelete] = useState<boolean>(false);
  const [isViewModel, setIsViewModel] = useState<boolean>(false);
  const hadleDelete = useCallback(
    async (event: any) => {
      setIsConfirmDelete(true);

      const ID: number = event.target.value;

      setDeleteID(ID);
    },
    [isConfirmDelete]
  );

  //if carInfo will delete again data will be fetch

  useEffect(() => {
    fetchData();
  }, [hasList]);
  //control add new form usecallBack hook
  const handleAddNew = useCallback(() => {
    setUpdateCarInfo(initialzieCarInfoForm);
    setHasUpdateForm(false);
    setHasList(false);
    fetchData();
  }, [hasList]);
  const applySearch = async () => {
    const res = await CarInfoService.getSearchResult(
      searchKey.text,
      searchKey.date,
      1
    );
 
    setTotalRecord(res.totalRecord);
    setData(res.carInfo);
  };

  //Final Delete Confermation Call and Delete Record
  const handleConfirm = async () => {
    const response = await CarInfoService.deleteCarInfoOne(deleteID);
    setIsConfirmDelete(false);
    setDeleteMessage(response.Message);
    fetchData();
  };

  // Delete Model Child Component End

  const [updateCarInfo, setUpdateCarInfo] = useState<CarInfoFormType>(
    initialzieCarInfoForm
  );
  //ID Identify
  const [ID, setID] = useState<number>(0);
  const [hasUpdateForm, setHasUpdateForm] = useState<boolean>(false);
  const handleUpdateCallback = useCallback(
    async (event: any) => {
      const carInfo = await CarInfoService.getCarInfoOne(event.target.value);
      setID(event.target.value);
      setUpdateCarInfo(carInfo);
      setHasUpdateForm(true);
      setHasList(false);
    },
    [updateCarInfo]
  );


  const [carInformationOne,setCarInformationOne]=useState<CarInfoFormType>(initialzieCarInfoForm)
  const handleViewCallback = useCallback(
    async (event: any) => {
       const carInformationOne  = await CarInfoService.getCarInfoOne(
        event.target.value
       );
       setCarInformationOne(carInformationOne);
      setIsViewModel(true);
    },
    [isViewModel]
  );
  //cancel function for delete button
  const handleCancelDeleteModel = () => {
    setIsConfirmDelete(false);
  };
  //cancel function for view button
  const handleCancelViewModel = () => {
    setIsViewModel(false);
  };
  //Authentication Section
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        router.push("/auth/singin");
      } else setLoading(false);
    };
    securePage();
  }, []);
  if (loading) <p>Loading...........</p>;
  return (
    <>
    {isViewModel&&<CarInfoView displayViewContent={carInformationOne}  handleCancelViewModel={handleCancelViewModel}
          />}
      {isConfirmDelete ? (
        <DeleteModel
          handleCancelDeleteModel={handleCancelDeleteModel}
          deleteModelFunc={handleConfirm}
        />
      ) : (
        ""
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
            handleUpdateCallback={handleUpdateCallback}
            handleViewCallback={handleViewCallback}
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
              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  {hasList && (
                    <h6 className="dark:text-white font-serif ml-5">
                      {tableName}
                    </h6>
                  )}
                </div>
                <div>
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
                      <h6 className="font-serif font-medium text-xl border-b-2 border-current w-72 ">
                        General/Customer Details
                      </h6>
                      <Button
                        className={"btn btn-outline btn-primary w-34  ml-auto mr-40"}
                        text={"list"}
                        onClick={() => setHasList(true)}
                      />
                    </div>
                    {hasUpdateForm && (
                      <CarInformationForm
                        btnText={"Update"}
                        id={ID}
                        initialzieCarInfoFormNotBlank={updateCarInfo}
                      />
                    )}
                    {!hasUpdateForm && (
                      <CarInformationForm
                        id={ID}
                        btnText={"Submit"}
                        initialzieCarInfoFormNotBlank={initialzieCarInfoForm}
                      />
                    )}
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


export default CarInfo;