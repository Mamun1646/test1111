import { NextPage } from "next";
import { useEffect, useState } from "react";
import { initializeReportForm } from "type/initializeValue";
import { ReportSearch, ReportType, UpdateType } from "type/interfaces";
import Button from "../Shared/Button/button";
import { ReportPdf } from "../Shared/ReportPdf";
import { UseInput } from "./../Shared/InputText/index";

interface ReportProps {
  title?: string;
  label?: string;
  total: number;
  totalContent:any[]
  onClick: (event: any) => Promise<void>;
  handleReport: (reportSearch: ReportSearch) => void;
}
export const Report: NextPage<ReportProps> = ({
  title,
  label,
  total,
  totalContent,
  onClick,
  handleReport,
}) => {
  const content = [
    {text: 'Datewise Revenue Report', fontSize: 14, bold: true, margin: [150, 20, 20, 20]},
		
    {
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Date', style: 'tableHeader'}, {text: 'Revenue Name', style: 'tableHeader'}, {text: 'Amount(BDT)', style: 'tableHeader'},{text: 'Date', style: 'tableHeader'}, {text: 'Revenue Name', style: 'tableHeader'}, {text: 'Amount(BDT)', style: 'tableHeader'}],
					['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
          ['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
          ['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
          ['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
          ['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
          ['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
          ['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
          ['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2', '10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
					['2023-01-23', 'Sample value 2','10,0000.00','2023-01-23', 'Sample value 2','10,0000.00'],
				]
					
				
			}
		},
			

  ];

  const [formData, setFormData] = useState<ReportType>(initializeReportForm);
  const [isValid,setIsValid]=useState<boolean>(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type } = event.target;

    const value =
      type === "number"
        ? Math.max(0, Math.min(100000000000, Number(event.target.value)))
        : event.target.value;
        if(formData.from_date>formData.to_date)
        setIsValid(true);
        else setIsValid(false);
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  //search keyword pass to parent
  useEffect(() => {
    handleReport(formData);
  }, [formData]);



  const handleDateCheck=()=>{
      
  }

  const [hasView,setHasView]=useState<boolean>(false)
  return (
    <div>
      <div className=" ml-4 flex">
        <div className="mr-auto ml-4 w-85">
          <UseInput
            label={"Date From"}
            placeholder={""}
            type={"Date"}
            value={formData["from_date"]}
            name={"from_date"}
            onChange={handleChange}
          />
        </div>
      
        <div className="mr-4  w-85">
          <UseInput
            label={"Date To"}
            placeholder={""}
            type={"Date"}
            value={formData["to_date"]}
            name={"to_date"}
            onChange={handleChange}
          />
        </div>
      </div>
    
      <div className="mr-auto ml-8 w-85">
        <UseInput
          label={label}
          placeholder={label}
          type={"text"}
          value={formData["title"]}
          name={"title"}
          onChange={handleChange}
        />
      </div>
  
  
     {true?<Button
        className={"btn btn-outline w-40 ml-135 mb-10 btn-primary"}
        text={"Submit"}
        onClick={onClick}
      />: <Button
      className={"btn btn-outline w-40 ml-135 mb-10 btn-primary"}
      text={"Submit"}
      onClick={handleDateCheck}
    />}
      {/* {!isValid&&<p className="text-center text-red-800">Please Enter Valid Input</p>} */}
      <div className="border-2 border-inherit "></div>
      <h5 className="text-center mt-4"> {title}</h5>

     
      { totalContent&& <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b">
            <tr className="bg-blue-100">
              
              <th
                scope="col"
                className="text-lg font-semibold  text-gray-900 px-6 py-4"
              >
               {label}
              </th>
              <th
                scope="col"
                className="text-lg font-semibold text-gray-900 px-6 py-4"
              >
                Value
              </th>
              <th
                scope="col"
                className="text-lg  font-semibold text-gray-900 px-6 py-4"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody>
    
       { totalContent.map((data,indx)=><tr key={indx} className="border-b bg-blue-50 border-blue-200">
              
             
              <td className="text-md  text-gray-900  px-6 py-4 whitespace-nowrap">
              {data.title}
              </td>
              <td className="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
              {new Intl.NumberFormat("en-US", ).format(data.value)}
              </td>
              <td className="text-md text-gray-900  px-6 py-4 whitespace-nowrap">
                {data.date}
              </td>
            </tr>)}
            <tr  className="border-b  bg-blue-50 border-blue-200">
           
             
              <td   className="text-lg  font-semibold  px-6 py-4  text-gray-900 whitespace-nowrap">
           Total
              </td>
             
             
              <td className="text-lg font-semibold text-gray-900  px-6 py-4 whitespace-nowrap">
              {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "BDT",
                }).format(total)}
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>}

      <div className="border-2 border-inherit mt-50"></div>
      {/* <Button
        className={"btn btn-outline w-40  mb-10 mt-2 btn-warning"}
        text={"Reset"}
        onClick={() => {}}
      /> */}

      <ReportPdf content={content} />
     
    
    </div>
  );
};
