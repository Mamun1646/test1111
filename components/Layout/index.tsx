import { NextPage } from "next";
import Header from "../Shared/Layout/Header";
import Sidebar from "../Shared/Layout/Sidebar";

interface ChildProps {
  children: React.ReactNode;
}

const Layout: NextPage<ChildProps> = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Sidebar />
    </>
  );
};
export default Layout;
