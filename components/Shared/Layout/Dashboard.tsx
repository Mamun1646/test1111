import { Navbar } from "../Navbar";


export default function DashBoard(){

    return <>
   <>
   <div  className="w-4/5 xl:ml-64 px-8 py-6 mx-auto">
          {/* table 1 */}
          <Navbar breadcrumbName={"DashBoard"} />
          <div className="flex flex-wrap -mx-3 ml-4">
            <div className="flex-none w-full max-w-full px-3">
              <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div  className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  
                </div>
  {/* component */}
  <section className="text-gray-600 body-font bg-gray-50 flex justify-center items-center">
    <div className="container px-5  mx-auto">
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div>
              <h2 className="text-gray-900 text-lg font-bold">
                Total Ballance
              </h2>
              <h3 className="mt-2 text-xl font-bold text-yellow-500 text-left">
                + 150.000 ₭
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                Last Transaction
              </p>
              <button className="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
              View
              </button>
            </div>
            <div className="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-32 h-32  rounded-full shadow-2xl shadow-yellow-400 border-white  border-dashed border-2  flex justify-center items-center ">
              <div>
                <h1 className="text-white text-2xl">Total Sales</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div>
              <h2 className="text-gray-900 text-lg font-bold">
                Total Ballance
              </h2>
              <h3 className="mt-2 text-xl font-bold text-orange-500 text-left">
                + 150.000 ₭
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                Last Transaction
              </p>
              <button className="text-sm mt-6 px-4 py-2 bg-orange-400  text-white rounded-lg  tracking-wider hover:bg-orange-500 outline-none">
              View
              </button>
            </div>
            <div className="bg-gradient-to-tr from-orange-500 to-orange-400 w-32 h-32  rounded-full shadow-2xl shadow-orange-400 border-white  border-dashed border-2  flex justify-center items-center ">
              <div>
                <h1 className="text-white text-2xl">Revenues</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div>
              <h2 className="text-gray-900 text-lg font-bold">
                Total Ballance
              </h2>
              <h3 className="mt-2 text-xl font-bold text-red-500 text-left">
                + 150.000 ₭
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                Last Transaction
              </p>
              <button className="text-sm mt-6 px-4 py-2 bg-red-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">
              View
              </button>
            </div>
            <div className="bg-gradient-to-tr from-red-500 to-red-400 w-32 h-32  rounded-full shadow-2xl shadow-red-400 border-white  border-dashed border-2  flex justify-center items-center ">
              <div>
                <h1 className="text-white text-2xl">Expenses</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div>
              <h2 className="text-gray-900 text-lg font-bold">
                Total Ballance
              </h2>
              <h3 className="mt-2 text-xl font-bold text-green-500 text-left">
                + 150.000 ₭
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                Last Transaction
              </p>
              <button className="text-sm mt-6 px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-green-500 outline-none">
              View
              </button>
            </div>
            <div className="bg-gradient-to-tr from-green-500 to-green-500 w-32 h-32  rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center ">
              <div>
                <h1 className="text-white text-2xl">Last Revenue</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div>
              <h2 className="text-gray-900 text-lg font-bold">
                Total Ballance
              </h2>
              <h3 className="mt-2 text-xl font-bold text-cyan-500 text-left">
                + 150.000 ₭
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                Last Transaction
              </p>
              <button className="text-sm mt-6 px-4 py-2 bg-cyan-400  text-white rounded-lg  tracking-wider hover:bg-cyan-500 outline-none">
              View
              </button>
            </div>
            <div className="bg-gradient-to-tr from-cyan-500 to-cyan-400 w-32 h-32  rounded-full shadow-2xl shadow-cyan-400 border-white  border-dashed border-2  flex justify-center items-center ">
              <div>
                <h1 className="text-white text-2xl">Basic</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div>
              <h2 className="text-gray-900 text-lg font-bold">
                Total Ballance
              </h2>
              <h3 className="mt-2 text-xl font-bold text-indigo-500 text-left">
                + 150.000 ₭
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                Last Transaction
              </p>
              <button className="text-sm mt-6 px-4 py-2 bg-indigo-400 text-white rounded-lg  tracking-wider hover:bg-indigo-500 outline-none">
               View
              </button>
            </div>
            <div className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
              <div>
                <h1 className="text-white text-2xl">Total Car</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>  </div>  </div>  </div>
</>


    </>
}