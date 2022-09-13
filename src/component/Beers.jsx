import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./beers.css";

export const Beers = () => {
  const [allBeers, setAllBeers] = useState([]);
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setAllBeers(response.data);
    });
  }, []);
  console.log(allBeers);
  return (
    <div className="all-beers-display">
      {allBeers.map((beer) => {
        return (
          <>
            <div className="beer-infos">
              <Link to={"/beers/" + beer._id}>
                <div className="beer-detail-left">
                  <img src={beer.image_url} alt={beer.name} />
                </div>

                <div className="beer-detail-right">
                  <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <p>
                    <b>Created by:</b>
                    {beer.contributed_by.slice(
                      0,
                      beer.contributed_by.indexOf("<")
                    )}
                  </p>
                </div>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};
