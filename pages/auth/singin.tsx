import { useEffect, useState } from "react";
import { SignIn } from "@/components/SignIn";
import { signIn, signOut, useSession } from "next-auth/react";
export default function SignInPage(){
    const session = useSession();
  
 
    return <SignIn />
}