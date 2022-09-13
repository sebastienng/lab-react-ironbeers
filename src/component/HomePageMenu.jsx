import React from "react";
import "./HomePageMenu.css";

import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import random from "../assets/random-beer.png";
import newbeer from "../assets/new-beer.png";
export const HomePageMenu = () => {
  return (
    <>
      <div className="menuOptions">
        <Link to="/beers">
          <div className="homeNav">
            <img src={beers} alt="allbeers" />
            <h1>All beers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Link>
        <Link to="/random-beer">
          <div className="homeNav">
            <img src={random} alt="randombeers" />
            <h1>Random beers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
          </div>
        </Link>
        <Link to="/new-beer">
          <div className="homeNav">
            <img src={newbeer} alt="newbeers" />
            <h1>New beers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
