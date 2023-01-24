import { NextPage } from "next";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Button from "../Button";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface ReportPdf{
  content:any;

}
export const ReportPdf:NextPage<ReportPdf> = ({content}) => {
 
  const docDefinition = {
   
   
    
     content  
    };
  const handleDownload = () => {
    
    
    //for pdf download
   pdfMake.createPdf(docDefinition).download(`Datewise Revenue-${+new Date()}.pdf`)
    //for pdf window veiw
    // pdfMake.createPdf(docDefinition).open({}, window);
   // pdfMake.createPdf(docDefinition).print()
  };
  const handleOpen = () => {

    //for pdf download
    // pdfMake.createPdf(docDefinition).download();
    //for pdf window veiw
     pdfMake.createPdf(docDefinition).open({}, window);
    //pdfMake.createPdf(docDefinition).print()
  };
  const handlePrint = () => {
   
    //for pdf download
    // pdfMake.createPdf(docDefinition).download();
    //for pdf window veiw
    // pdfMake.createPdf(docDefinition).open({}, window);
    pdfMake.createPdf(docDefinition).print()
  };

  return (
    <>
      <Button
        className={"btn btn-outline w-40  mb-10 ml-4 mt-2 btn-primary"}
        text={"Download"}
        onClick={handleDownload}
      />
       <Button
        className={"btn btn-outline w-40  mb-10 ml-4 mt-2 btn-primary"}
        text={"Print"}
        onClick={handlePrint}
      />
        <Button
        className={"btn btn-outline w-40  mb-10 ml-4 mt-2 btn-primary"}
        text={"Open"}
        onClick={handleOpen}
      />
      
    </>
  );
};
