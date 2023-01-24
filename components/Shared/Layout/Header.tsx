import { Bubblegum_Sans } from "@next/font/google";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function Header() {
  return (
    <div className="absolute w-full bg-red-500 min-h-75 flex">
     
   <div className="ml-auto">
      <Popup trigger={
        
      <button className=" text-lg cursor-pointer hover:text-xl text-white mr-8">Mithu2022 </button>} 
     position="bottom right">

      <div className="flex flex-col h-30 ">
        <p className="ml-12">Signed in as  </p>
        <span className="font-bold ml-14">Mithu2022</span>
         <button className="hover:bg-blue-500 hover:text-white text-lg" >Change Password</button>

      <button className="hover:bg-blue-500 hover:text-white text-lg border-t-2 border-inherit" onClick={() => signOut()}>SignOut</button>
      </div>
    </Popup>
    </div>
    
    </div>
  );
}
