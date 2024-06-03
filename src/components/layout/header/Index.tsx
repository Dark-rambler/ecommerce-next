import Link from "next/link";
import { Menu } from "@/Interfaces/layout.interface";
import { IconSelector } from "@/components/atoms/iconSelector/Index";
import { useState } from "react";
import { useTheme } from "next-themes";

export const Header = (menu: Menu) => {
  const [openMenu, setOpenMenu] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const { setTheme } = useTheme();

  const changeMode = () => {
    setIsDark(!isDark);
    setTheme(isDark ? "dark" : "light");
  };

  return (
    <header className="bg-primary w-full fixed shadow-md">
      <div className=" hidden md:flex items-center py-4">
        <div className="ps-4 me-4">
          <Link href="/">
            <i className="text-2xl  font-bold text-title">Ecommerce</i>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center">
          {menu.options.map((option, index) => (
            <Link href={option.Link} key={index} className="">
              <i className="text-text mx-5">{option.Label}</i>
            </Link>
          ))}
        </div>
        <div
          className={`rounded-full w-8 h-8 flex items-center ps-1 mx-auto  ${
            isDark ? "mr-5 bg-gray-700" : "mr-5  bg-gray-100"
          }`}
        >
          <span onClick={() => changeMode()} className="">
            <IconSelector
              name={`${isDark ? "sun" : "moon"}`}
              color={`${isDark ? "text-gray-100" : "text-gray-900"}`}
              className={`me-5 cursor-pointer `}
            />
          </span>
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center py-4 ">
        <div className="ps-4 me-4">
          <Link href="/">
            <i className="text-2xl font-bold text-gray-800">Ecommerce</i>
          </Link>
        </div>
        <span onClick={() => setOpenMenu(!openMenu)}>
          <IconSelector
            name={openMenu ? "menu" : "close"}
            color=" black "
            className="me-5  cursor-pointer "
          />
        </span>
      </div>
    </header>
  );
};
