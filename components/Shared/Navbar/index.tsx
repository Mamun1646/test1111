import { NextPage } from "next"
interface Props{
  breadcrumbName:string;
}
export const Navbar:NextPage<Props>=({breadcrumbName})=>{
    return <>
<nav
    className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
    navbar-main=""
    navbar-scroll="false"
  >
  
    <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
      <nav>
        {/* breadcrumb */}
        <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
          <li className="text-sm leading-normal">
            <a className="text-white opacity-50" >
              Pages
            </a>
          </li>
          <li
            className="text-md pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
            aria-current="page"
          >
          {breadcrumbName}
          </li>
        </ol>
        <h6 className="mb-0 font-bold text-white capitalize">{breadcrumbName}</h6>
      </nav>
     
    </div>
  </nav>
</>
    
}