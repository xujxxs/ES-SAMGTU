import { Outlet, useLocation, Link } from "react-router-dom";
import { useState, useMemo } from "react";

export const Layout = () => {
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return (
    <div className="w-full">
      {!isHomePage && (
        <header className="flex items-center justify-between px-4 sm:px-6 lg:px-40 py-4">
          <Link to={"/"}>
            <img
              src="/logo.svg"
              alt="Логотип"
              className="w-25 h-25 sm:w-10 sm:h-10 lg:w-auto lg:h-auto"
            />
          </Link>

          <div className=" md:flex  space-x-6 lg:space-x-10 text-gray-500 font-medium">
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
