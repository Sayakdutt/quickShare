"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { GiArmorUpgrade } from "react-icons/gi";
import Image from "next/image";

const Sidebar = () => {
  
  type menutypes = {
    id: number;
    name: string;
    icon: React.JSX.Element;
    path: string;
  };
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: <IoCloudUploadOutline size={30} />,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: <FaRegFileAlt size={30} />,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <GiArmorUpgrade size={30} />,
      path: "/upgrade",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const router = useRouter();

  const handleRoute = (path: string,id:number) => {
    setActiveIndex(id);
    router.push(path);
  }

  return (
    <div className="shadow-lg border-r h-full rounded-lg">
      <div className="p-5 border-b flex gap-2 items-center">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <h2 className="font-bold text-3xl">Quickshare</h2>
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item: menutypes) => (
          <button
            key={item.id}
            className={`flex gap-2 p-4 px-6 hover:bg-gray-200 rounded-xl text-gray-600 ${
              activeIndex == item.id
                ? "bg-blue-100 text-primary"
                : "text-gray-600"
            }`}
            onClick={() =>handleRoute(item.path,item.id)}
          >
            {item.icon}
            <h2 className="font-bold text-2xl">{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
