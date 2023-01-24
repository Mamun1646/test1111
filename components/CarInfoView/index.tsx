import { NextPage } from "next"
import { carInfoInputFieldCol1, carInfoInputFieldCol2, carInfoInputFieldSalesCol1, carInfoInputFieldSalesCol2 } from "type/totalFormField"
import Button from "../Shared/Button"
interface ViewProps{
  handleCancelViewModel:()=>void
  displayViewContent:any
}
export const CarInfoView:NextPage<ViewProps>=({displayViewContent,handleCancelViewModel})=>{
  console.log(displayViewContent)
  return <>
  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
    <div className="relative w-130 my-6 mx-auto max-w-3xl">
      {/*content*/}
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-start justify-between p-5 border-b border-solid  border-slate-200 rounded-t">
          <h3 className="text-2xl  font-semibold  ">Car Information</h3>
          <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        {/*body*/}
        <div className="relative p-6 overflow-x-hidden overflow-y-auto h-90 flex-auto">
        <p className="text-green-800 text-center text-xl border-b-2">General/Customer Details</p>
          {carInfoInputFieldCol1.map((fieldName,indx)=><div key={indx} className="flex">
            <p >{fieldName.label}:</p><p className="text-slate-400 ml-2">{displayViewContent[fieldName.value]}</p>
</div>
          )}
         
          {carInfoInputFieldCol2.map((fieldName,indx)=><div key={indx} className="flex">
            <p >{fieldName.label}:</p><p className="text-slate-400 ml-2">{displayViewContent[fieldName.value]}</p>
</div>
          )}
         <p className="text-green-800 text-center text-xl border-b-2">Sales Details</p>
           {carInfoInputFieldSalesCol1.map((fieldName,indx)=><div key={indx} className="flex">
            <p >{fieldName.label}:</p><p className="text-slate-400 ml-2">{displayViewContent[fieldName.value]}</p>
</div>
          )} 
            {carInfoInputFieldSalesCol2.map((fieldName,indx)=><div key={indx} className="flex">
            <p >{fieldName.label}:</p><p className="text-slate-400 ml-2">{displayViewContent[fieldName.value]}</p>
</div>
          )} 
         
         
        
        </div>

        {/*footer*/}
        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
          
          <Button
                        className={"btn btn-outline btn-primary w-34  ml-auto mr-40"}
                        text={"Ok"}
                        onClick={handleCancelViewModel}
                      />
          
        </div>
      </div>
    </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>

}