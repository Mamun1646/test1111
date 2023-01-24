import Link from "next/link";
import { useRouter } from "next/router";


export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="font-saans">
      <aside
        className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
        aria-expanded="false"
      >
        <div className="h-19">
          <i
            className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
            sidenav-close=""
          />
          <div className="block px-8 py-6 m-0 text-lg whitespace-nowrap dark:text-white text-slate-700">
           
            <span className="ml-8 transition-all duration-200 ease-nav-brand">
              GoldenmilesBd
            </span>
          </div>
        </div>
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
        <div className="items-center block w-auto max-h-screen  h-sidenav grow basis-full">
          <div className="flex flex-col pl-0 mb-0">
            <div className={`mt-0.5 w-full ${
                router.asPath === "/"
                  ? "bg-blue-500/13 rounded-lg "
                  : ""
              }`} onClick={() => router.push("/")}>
                
              <div className={`  ${router.asPath===''}?"bg-blue-500/13":"" cursor-pointer py-2.7 font-['Open_Sans']  dark:text-white dark:opacity-80  text-md ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 text-slate-700 transition-colors`}>
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-md  text-blue-500 ni ni-tv-2"  />
                </div>
                
                <span >Dashboard</span>
              </div>
            </div>

            <div
              className={`mt-0.5 w-full cursor-pointer  ${
                router.asPath === "/car-info"
                  ? "bg-blue-500/13 rounded-lg"
                  : ""
              }`}
              onClick={() => router.push("/car-info")}
            >
              <div className="dark:text-white dark:opacity-80 py-2.7  text-md ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0  text-md leading-normal text-orange-500 ni ni-calendar-grid-58" />
                </div>
                    <span className="ml-1 duration-300 opacity-100 hover:bg-slate-400 pointer-events-none ease">
                  CarInfo
                </span>
              </div>
            </div>
            <div
              className={`mt-0.5 w-full cursor-pointer  ${
                router.asPath === "/revenue" ? "bg-blue-500/13 rounded-lg" : ""
              }`}
              onClick={() => router.push("/revenue")}
            >
              <div
                className="dark:text-white dark:opacity-80 py-2.7  text-md ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                // href="./pages/billing.html"
                // href="/"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0  text-md leading-normal text-emerald-500 ni ni-credit-card" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Revenue
                </span>
              </div>
            </div>
            <div
              className={`mt-0.5 cursor-pointer  w-full ${
                router.asPath === "/expenditure"
                  ? "bg-blue-500/13 rounded-lg"
                  : ""
              }`}
              onClick={() => router.push("/expenditure")}
            >
              <div
                className="dark:text-white dark:opacity-80 py-2.7  text-md ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                // href="./pages/virtual-reality.html"
                // href="/"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0  text-md leading-normal text-cyan-500 ni ni-app" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Expenditure
                </span>
              </div>
            </div>

            <div className="w-full mt-4">
              <h6 className="pl-6 ml-4  text-md leading-tight uppercase dark:text-white opacity-60">
                Report
              </h6>
            </div>
           
            <div
              className={`mt-0.5 cursor-pointer  w-full ${
                router.asPath === "/revenue-report"
                  ? "bg-blue-500/13 rounded-lg"
                  : ""
              }`}
              onClick={() => router.push("/revenue-report")}
            >
              <div
                className="dark:text-white dark:opacity-80 py-2.7  text-md ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
             
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0  text-md leading-normal text-orange-500 ni ni-single-copy-04" />
                </div>
                <span className="ml-1 cursor-pointer duration-300 opacity-100 pointer-events-none ease">
                  Revenue
                </span>
              </div>
            </div>
            <div
              className={`mt-0.5 cursor-pointer  w-full ${
                router.asPath === "/expenditure-report"
                  ? "bg-blue-500/13 rounded-lg"
                  : ""
              }`}
              onClick={() => router.push("/expenditure-report")}
            >
              <div
                className="dark:text-white dark:opacity-80 py-2.7  text-md ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
             
              >
                <div className="mr-2 flex  h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0  text-md leading-normal text-cyan-500 ni ni-collection" />
                </div>
                <span className="ml-1 cursor-pointer duration-300 opacity-100 pointer-events-none ease">
                  Expenditure
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
