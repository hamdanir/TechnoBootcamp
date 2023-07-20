"use client";

import Image from "next/image";
import Link from "next/link";
import images from "../../../public/images";
import { useEffect, useState } from "react";

export default function Header() {
  const menuHeader = [
    { name: "Home", href: "/" },
    { name: "Galery", href: "/galery" },
    { name: "About Us", href: "/about" },
    { name: "User", href: "/users" },
  ];

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const getCurrentTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(getCurrentTheme());
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <header className="flex flex-row px-5 justify-between shadow-lg">
      <div className="py-5 flex flex-row">
        <Image
          src={images.LOGO_BERIJALAN}
          width={40}
          height={36}
          alt="logo-berijalan"
        ></Image>
        <div>
          <h1 className="mx-1 font-bold text-3xl">berijalan</h1>
          <p className="font-thin text-xs text-right">
            member <span className="font-bold">of ASTRA</span>
          </p>
        </div>
      </div>

      <ul className="flex flex-row">
        <div
          className="p-5 "
          style={{ cursor: "pointer" }}
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? (
            <Image
              src={images.LIGHT}
              width={24}
              height={24}
              alt="dark mode"
            ></Image>
          ) : (
            <Image
              src={images.DARK}
              width={24}
              height={24}
              alt="light mode"
            ></Image>
          )}
        </div>
        {menuHeader.map((item, index) => (
          <Link key={index} href={item.href}>
            <li className="p-5  hover:bg-slate-300 hover:font-bold">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
}
