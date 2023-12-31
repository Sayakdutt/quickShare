import React from "react";
import Sidebar from "@/components/dasboard/Sidebar";
import NavBar from "@/components/dasboard/NavBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default layout;
