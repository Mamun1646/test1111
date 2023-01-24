
import { signIn } from "next-auth/react";
import { Router, useRouter } from "next/router";
import { FormEventHandler, useState } from "react";


export const SignIn=() => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ email: "", password: "",confirmPassword:"" });
  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

   
    RedirectPath(res)
  };
const [error,setError]=useState<boolean>(false)
const RedirectPath=(res:any)=>{
   if(res.error===null)
   router.push("/");
   else setError(true)
}

  const handlChange =  (e:React.ChangeEvent<HTMLInputElement>) =>{
    setUserInfo((userInfo) => ({
      ...userInfo,
      [e.target.name]: e.target.value,
    }));

  }
  
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
              GoldenMilesBd App Admin LogIn
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handlChange}
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    value={userInfo.password}
                    onChange={handlChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="confirm password"
                    name="confirmPassword"
                    type="password"
                    value={userInfo.confirmPassword}
                    onChange={handlChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="confirm password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="relative">
                 {(userInfo.password!=""&&userInfo.password===userInfo.confirmPassword)? <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                  >
                    Submit
                  </button>:<button
                    
                    className="bg-blue-200 text-white rounded-md px-2 py-1"
                  >
                    Submit
                  </button>}
                </div>
                {error&&<p className="text-red-800">Email or Password Is Incorrect!!</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
