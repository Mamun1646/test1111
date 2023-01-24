import { Report } from "@/components/Report";
import { Navbar } from "@/components/Shared/Navbar";
import { useState,useEffect } from "react";
import { ExpenditureService } from "services/expenditure.service";
import { initializeReportForm, initialUpdateForm } from "type/initializeValue";
import { ReportSearch, ReportType, UpdateType } from "type/interfaces";
import { getSession } from "next-auth/react";

import { useRouter } from "next/router";
export default function ExpenditureReport(){
const router=useRouter()

  const [query,setQuery]=useState<ReportType>(initializeReportForm)
  const handleReport = async (reportSearch: ReportSearch) => {
    setQuery(reportSearch);
  };

const [total,setTolal]=useState<number>(0)
//Table data state
const [Data, setData] = useState();
const totalContent: any = Data;
  const getExpenditureReport=async()=>{
   const res= await ExpenditureService.getExpenditureReport(query.title,query.from_date,query.to_date)
   setTolal(res.Total)
   setData(res.expenditure)
   
  }
 
console.log(totalContent)
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
  return <div  className="w-4/5 xl:ml-64 px-8 py-6 mx-auto">
          {/* table 1 */}
          <Navbar breadcrumbName={"Expenditure Report"} />
          <div className="flex flex-wrap -mx-3 ml-4">
            <div className="flex-none w-full max-w-full px-3">
              <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div  className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  <h5 className="text-center"> Datewise Expenditure</h5>
                
                </div>
             
               <Report totalContent={totalContent} handleReport={handleReport} onClick={getExpenditureReport}total={total} label={"Expenditure Name"} title={" Datewise Expenditure"}/>
              
            </div>
          </div>
        </div>
        </div>
 
}