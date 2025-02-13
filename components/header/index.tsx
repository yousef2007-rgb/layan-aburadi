import React, { useCallback } from "react";
import Link from "next/link";

const header = async () => {

  return (
    <div className="h-24 flex items-center bg-white mb-2">
      <header className="py-3 shadow-lg* h-24 font-medium px-6  flex max-w-[1200px] mx-auto  top-0 left-0 right-0 z-50 bg-white w-screen items-center justify-between">
        <h1 className="text-2xl font-extrabold w-fit">LayanAburadi</h1>
        <nav className=" [&>*]:mx-3 hidden lg:flex">
            <Link className= "hover:underline" href={"#aboutme"}>About Me</Link>     
            <Link className= "hover:underline" href={"#ammantv"}>Amman TV</Link>     
            <Link className= "hover:underline" href={"#art"}>ART</Link>     
            <Link className= "hover:underline" href={"#content"}>Content</Link>     
        </nav>
        <Link className="bg-secondary text-white rounded-full px-4 py-2" target="_blank" href={"https://www.linkedin.com/in/layan-a-652874172/"}>Contact</Link>
      </header>
    </div>
  );
};

export default header;
