import { Outlet, useLocation, Link } from "react-router-dom";
import { useState, useMemo } from "react";

export const Layout = () => {
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return <div>{!isHomePage && <header>as</header>}</div>;
};
