import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = () => {
  return (
    <div>
      {/* header  */}
      <Header />

      {/* main body  */}
      <main className="main">
        <Outlet />
      </main>

      {/* footer  */}
      <Footer />
    </div>
  );
};
