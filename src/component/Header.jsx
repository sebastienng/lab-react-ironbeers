import React from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="headerDiv">
        <Link to="/" className="link-header">
          HOME
        </Link>
      </div>
      <Outlet />
    </>
  );
};
