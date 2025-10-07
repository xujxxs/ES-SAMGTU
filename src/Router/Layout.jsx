import { Outlet, useLocation, Link } from "react-router-dom";
import { useState, useMemo, useRef } from "react";

export const Layout = () => {
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return (
    <div className="w-full" ref={headerRef}>
      {!isHomePage && (
        <header className="flex items-center justify-center px-4 py-1 sm:px-6 lg:px-40 lg:py-4 lg:justify-between bg-white">
          <Link to={"/"}>
            <img
              src="/logo.svg"
              alt="Логотип"
              className="w-25 h-25 sm:w-10 sm:h-10 lg:w-auto lg:h-auto"
            />
          </Link>

          <div className="hidden md:flex  space-x-6 lg:space-x-10 text-gray-500 font-medium">
            <a
              href="https://samgtu.ru/bachelors/bachelors-faculty-iait"
              className="duration-200 ease-in hover:text-gray-700 transition-colors"
            >
              О нас
            </a>
            <a
              href="/"
              className="duration-200 ease-in hover:text-gray-700 transition-colors"
            >
              Как это работает
            </a>
          </div>
        </header>
      )}
      <Outlet />
    </div>
  );
};
