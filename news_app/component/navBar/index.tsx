import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface NavPorps {
  navOptions:[{
    name:string,
    href:string,
  }];
  logoUrl:string,
}
const NavBar = ({navOptions,logoUrl}:NavPorps) => {
  const [showSidebar, setSideBar] = useState<boolean>(false);
  
  const renderNavOptions = navOptions.map((item, index) => {
    return (
      <>
        <Link key={item.name} href={item.href}>
          <li className="p-2"> {item.name}</li>
        </Link>
      </>
    );
  });
  return (
    <>
      {/* MObile NavBar start */}

      <div className="flex justify-between p-2  z-0 sm:hidden">
        <div>
          <Image src={logoUrl} alt="logo-image" width="70" height="70" />
        </div>
        <div
          onClick={() => {
            setSideBar(true);
          }}
        >
          <img src="/icon-menu.svg" />
        </div>
      </div>
      <div
        className={` ease-in-out duration-300 ${
          showSidebar ? " -translate-y-10  transform-gpu" : "hidden"
        }  `}
      >
        <div className="absolute w-full h-full top-0 bg-gray-500[.03]   z-10 sm:hidden"></div>
        <div className="absolute z-20 top-0 right-0   w-3/5 h-screen pt-10 bg-slate-500  sm:hidden">
          <div
            className="absolute top-1 pt-2 right-5 cursor-pointer"
            onClick={() => {
              setSideBar(false);
            }}
          >
            <img src="/icon-menu-close.svg" />
          </div>
          <ul className="">{renderNavOptions}</ul>
        </div>
      </div>

      {/* Mobile NavBar end */}
      {/* Desktop NavBar start */}
      <div className="hidden sm:flex  sm:p-1 sm:space-x-96  sm:align-top ">
        <div>
          <Image
            src={logoUrl}
            alt="logo-image"
            width="50"
            height="50"
            layout="responsive"
          />
        </div>
        <div>
          <ul className="flex space-x-4">{renderNavOptions}</ul>
        </div>
      </div>
      {/* Destkop NavBar end */}
    </>
  );
};

export default NavBar;
