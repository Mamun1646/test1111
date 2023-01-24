import { NextPage } from "next";

interface AlertProps {
  handleCancelDeleteModel: (event: React.MouseEvent<HTMLButtonElement>) => void;
  SuccessMessage: boolean;
}
export const Alert: NextPage<AlertProps> = ({
  handleCancelDeleteModel,
  SuccessMessage,
}) => {
  return (
    <>
      <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}

          <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
            <div className="bg-black opacity-25 w-0 h-full absolute z-10 inset-0" />
            <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
              <div className="md:flex items-center">
                {/* <div className="rounded-full border border-gray-300 flex items-center justify-center bg-red--700 w-16 h-16 flex-shrink-0 mx-auto">
       
          </div> */}
                <div className="mt-4 md:mt-0 md:ml-6 md:mr-6 text-center md:text-left">
                  {SuccessMessage ? 
                    <p className="font-bold text-xl text-green-800 ">
                      Successfully Submitted Your Data
                    </p>:<p className="font-bold text-xl text-red-800 ">
                     Please Fill The Input Field
                    </p>
                    
                  }
                </div>
              </div>
              <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                <button
                  onClick={handleCancelDeleteModel}
                  className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
      md:mt-0 md:order-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
