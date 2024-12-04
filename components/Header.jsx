"use client"
import { Suspense, useState } from "react";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import Button from "../components/Button";
import Image from "next/image";
import dynamic from "next/dynamic";
const DynamicImage = dynamic(() => import("next/image"), { ssr: true });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[88px]">
      <div className="container mx-auto py-5 flex items-center justify-between px-9 md:py-5">
        {/* <img src="../public/next" alt="" /> */}
        {/* <Suspense fallback={<div className="bg-red-300">Loading...</div>}>
          <DynamicImage
            src="/svg/logo.svg"
            alt="Next.js Logo"
            width={200}
            height={40}
            priority
          />
        </Suspense> */}
        <Image  src={"/svg/logo.svg"} alt="logo" width={40} height={30}/>

{/* <Image src={'/next.svg'} width={200} height={40} priority/> */}
        {/* Desktop Navigation */}
        <ul className="md:items-center lg:flex hidden">
          {["Home", "Services","About", "Contact"].map(
            (menuItem, index) => (
              <li
                key={index}
                className="mx-4 whitespace-nowrap font-medium hover:border-b-2 border-primary flex-none"
              >
                <Link
                  href={`/${menuItem.toLowerCase().replace(" ", "")}`}
                  className="relative text-xl transition duration-300 w-fit block text-mainColor tracking-wide hover:text-orangeColor"
                >
                  {menuItem}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden flex-row gap-4  border  lg:flex lg:items-center">
        <a
          href="/signup"
        >

      <Button 
           className="block w-full rounded bg-white   px-12 py-3 text-lg font-medium text-primary shadow hover:bg-white  hover:scale-105 hover:text-primary transition-all focus:outline-none  sm:w-auto"
             // className=" text-white p-0 m-0  whitespace-nowrap sm:mr-2 mb-1  w-2  flex justify-center text-xs"
              content="Sign Up"
            />
        </a>
        <a
          href="/login"
        >

<Button 
 className="block w-full rounded bg-primary  px-12 py-3 text-lg font-medium text-white shadow hover:bg-white hover:border-primary border hover:scale-105 hover:text-primary transition-all focus:outline-none  sm:w-auto"
    // className=" text-white p-0 m-0  whitespace-nowrap sm:mr-2 mb-1  w-2  flex justify-center text-xs"
              content="Sign In"
            />
        </a>
   
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <Hamburger
            rounded
            color="black"
            easing="ease-in"
            toggle={setIsOpen}
            toggled={isOpen}
            duration={0.3}
            distance="lg"
            hideOutline={false}
            size={20}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`absolute bg-white top-[70px] z-50 gap-3 lg:hidden ${
          isOpen ? "left-[35px] duration-500" : "-left-[1500px] duration-500"
        } w-2/5 flex justify-center flex-col border rounded-2xl border-primary  gap-1 items-center px-3 p-4`}
      >
        {["Home", "About", "hola"].map(
          (menuItem, index) => (
            <li
              key={index}
              className="hover:border-l-4  border-b   hover:border-primary  mb-2 hover:border-r-primary hover:border-r-4 w-3/4 justify-center flex gap-2 items-center"
            >
         
              <Link
                href={`/${menuItem.toLowerCase().replace(" ", "")}`}
                className="transition  text-center  font-medium tracking-wide duration-300 hover:text-primary text-xs"
              >
                {menuItem}
              </Link>
            </li>
          )
        )}
        {/* <div className="sm:justify-between flex-col flex items-center sm:flex-row justify-center "> */}
          <Link href="/">
            <Button
              className=" text-white p-0 m-0  whitespace-nowrap sm:mr-2 mb-1  w-2  flex justify-center text-xs"
              content="Sign Up"
            />
          </Link>
     
        {/* </div> */}
      </ul>
    </div>
  );
};

export default Header;
