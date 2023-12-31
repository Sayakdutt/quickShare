import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { FaAlignJustify } from "react-icons/fa6";
import SideBar from '@/components/dasboard/Sidebar';

const NavBar = () => {
  return (
    <div className="flex p-5 items-center justify-between md:justify-end">
      <FaAlignJustify
        size={30}
        className="md:hidden hover:bg-slate-100 rounded-md shadow-md"
      />
      <div className='flex items-center space-x-2'>
        <Image src="/logo.svg" alt="logo" width={40} height={40} className="md:hidden"/>
        <h2 className="font-bold text-3xl">Quickshare</h2>
      </div>
      <UserButton />
    </div>
  );
};

export default NavBar; 
