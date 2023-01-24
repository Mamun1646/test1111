import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { getSession, SessionProvider } from "next-auth/react"
import { useEffect, useState } from "react";


export default function App({ Component,  pageProps: { session, ...pageProps } }: AppProps) {
 //Authentication Section
 const [loading, setLoading] = useState<boolean>(true);

 useEffect(() => {
   const securePage = async () => {
     const session = await getSession();
     if (!session) {
      setLoading(true)
     } else setLoading(false);
   };
   securePage();
 });
 
  return (
     
    <SessionProvider session={session}>
     { loading?<Component {...pageProps} />:
     <Layout>
        <Component {...pageProps} />
      </Layout>}
        </SessionProvider>
  );
}
