import { Outlet } from "react-router-dom";
import Header from "./Header";
import React from "react";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
        {/*represents all of the children, here in this file we can add anything
        that is common to all pages */}
      </main>
    </>
  );
};

export default Layout;
