import { CarInfoFormType, CarInfoObejectType } from "type/interfaces";
import { UseInput } from "../Shared/InputText";
import { useRef, useState } from "react";
import {
  carInfoInputFieldCol1,
  carInfoInputFieldCol2,
  carInfoInputFieldSalesCol1,
  carInfoInputFieldSalesCol2,
} from "type/totalFormField";
import { CarInfoService } from "services/carinfo.service";

import Button from "../Shared/Button";
import { NextPage } from "next";
import { initialzieCarInfoForm } from "type/initializeValue";
import { Alert } from "../Shared/AlertModel";
interface FormProps{
  initialzieCarInfoFormNotBlank:CarInfoFormType
  btnText:string,
  id:number;
 
}
export const CarInformationForm:NextPage<FormProps> = ({initialzieCarInfoFormNotBlank,btnText,id}) => {
    //for top scroll 
const divRef = useRef<HTMLDivElement>(null);
const topScroll=()=>{
  if (divRef.current !== null) {divRef.current.scrollIntoView()}
}
  //form controll section
  const [formData, setFormData] = useState<CarInfoFormType>(
    initialzieCarInfoFormNotBlank
  );

  //input type state change
  const [cost,setCost]=useState<number>(0)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type } = event.target;
  formData.veichle_name===''?setHasBlank(true):setHasBlank(false)
    const value =
      type === "number"
        ? Math.max(0, Math.min(100000000000, Number(event.target.value)))
        : event.target.value;
         
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  //text area type input change
  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, type, value } = event.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  //select area type input change
  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, type, value } = event.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };


  //form submission 
  //alert
  const [hasAlert,setHasAlert]=useState<boolean>(false)
  const handleCancel=()=>{
    setHasAlert(false)
  }
  const handleSubmit=async()=>{
   await CarInfoService.createCarInfoList(formData)
   setHasAlert(true)

  }
  //form Update
  const handleUpdate=async()=>{
    await CarInfoService.updateCarInfo(id,formData)
    setHasAlert(true)
   }
 //handle reset form data
 const handleReset = () => {
  setFormData(initialzieCarInfoForm);
  topScroll()
};
//Blank check
const [hasBlank,setHasBlank]=useState<boolean>(false)
const handleBlank=()=>{
  setHasAlert(true)
  setHasBlank(true)
}

  return (
    <div ref={divRef}  > {hasAlert && <Alert SuccessMessage={!hasBlank} handleCancelDeleteModel={handleCancel}/>}
      <div className="bg-white rounded px-8  w-full   pb-8 mb-4 flex flex-col ">
   
        <div className="grid grid-cols-2 border-b-2 border-current">
       
          <div className="-mx-3 gridgrid-rows-9 justify-between mb-5">
        
            {carInfoInputFieldCol1.map((property: CarInfoObejectType, indx) => (
              <div key={indx} className="md:w-125 px-3 mb-10 md:mb-0">
                {property.type === "text" || property.type === "date" ? (
                  <UseInput
                    label={property.label}
                    placeholder={property.label}
                    type={property.type}
                    value={formData[property.value]}
                    name={property.value}
                    onChange={handleChange}
                  />
                ) : (
                  <div>
                    {" "}
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-first-name"
                    >
                      {property.label}
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name={property.value}
                        rows={3}
                        value={formData[property.value]}
                        onChange={handleChangeTextArea}
                        className="appearance-none focus:bg-gray-10 border-gray-500 block w-full  text-gray-700 border mb-5 rounded py-3 px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="-mx-3 gridgrid-rows-9 justify-between mb-5">
            {carInfoInputFieldCol2.map((property: CarInfoObejectType, indx) => (
              <div key={indx} className="md:w-125 px-3 mb-10 md:mb-0">
                {property.type === "text" || property.type === "date" ? (
                  <UseInput
                    label={property.label}
                    placeholder={property.label}
                    type={property.type}
                    value={formData[property.value]}
                    name={property.value}
                    onChange={handleChange}
                  />
                ) : (
                  <div>
                    {" "}
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-first-name"
                    >
                      {property.label}
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name={property.value}
                        rows={3}
                        value={formData[property.value]}
                        onChange={handleChangeTextArea}
                        className="appearance-none focus:bg-gray-10 mb-5 border-gray-500 block w-full  text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded px-8  w-full    pb-8  flex flex-col ">
        <h6 className="font-serif font-medium text-xl border-b-2 border-current w-40 ">Sales Details</h6>
        <div className="grid grid-cols-2 border-b-2 border-current">
          <div className="-mx-3 gridgrid-rows-14 justify-between mb-5">
            {carInfoInputFieldSalesCol1.map(
              (property: CarInfoObejectType, indx) => (
                <div key={indx} className="md:w-125 px-3 mb-10 md:mb-0">
                  {property.type === "number" ? (
                    <UseInput
                      label={property.label}
                      placeholder={property.label}
                      type={property.type}
                      value={formData[property.value]}
                      name={property.value}
                      onChange={handleChange}
                    />
                  ) : (
                    <div>
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-state"
                      >
                        Mode Of Payment
                      </label>
                      <div className="relative">
                        <select
                          onChange={handleChangeSelect}
                          name="mode_of_payment"
                          className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                          id="grid-state"
                        >
                          <option disabled selected>
                            Choose Your Payment Mode
                          </option>
                          <option value={"FULL_PAYMENT"}>Full Payment</option>
                          <option value={"BALANCE"}>Balance</option>
                        </select>
                        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          <div className="-mx-3 gridgrid-rows-16 justify-between mb-5">
            {carInfoInputFieldSalesCol2.map(
              (property: CarInfoObejectType, indx) => (
                <div key={indx} className="md:w-130 px-3 mb-10 md:mb-0">
                  {property.type === "number" ? (
                    <UseInput
                      label={property.label}
                      placeholder={property.label}
                      type={property.type}
                      value={formData[property.value]}
                      name={property.value}
                      onChange={handleChange}
                    />
                  ) : (
                    <div>
                      {" "}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                        htmlFor="grid-first-name"
                      >
                        {property.label}
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name={property.value}
                          rows={3}
                          value={formData[property.value]}
                          onChange={handleChangeTextArea}
                          className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex mb-30">
                      <Button
                        text={"Reset"}
                        className={"btn   btn-outline btn-warning w-34 ml-auto mr-2"}
                             onClick={handleReset}
                   
                      />
                     {(formData.veichle_name==="") ? <Button
                        text={btnText}
                        className={"btn btn-outline btn-primary w-34 mr-34 "}
                        onClick={handleBlank}
                      />:<Button
                      text={btnText}
                      className={"btn btn-outline btn-primary w-34 mr-34  "}
                      onClick={btnText==="Submit"?handleSubmit:handleUpdate}/>}
                    </div>
     
    </div>
  );
};
