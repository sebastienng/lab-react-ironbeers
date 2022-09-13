import React from "react";
import "./singlebeer.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

import axios from "axios";

export const SingleBeer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState("");
  const url = `https://ih-beers-api2.herokuapp.com/beers/${id}`;
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log("response.data", response.data);
      setBeer(response.data);
    });
  }, [id]);
  if (!beer) {
    return <h1>im loading </h1>;
  }
  return (
    <div className="single-beer">
      <div className="beer-image">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="single-beer-infos">
        <div className="info-top">
          <p>{beer.name}</p>
          <p>{beer.attenuation_level}</p>
        </div>
        <div className="info-mid">
          <p>{beer.tagline}</p>
          <p>
            <b>{beer.first_brewed}</b>
          </p>
        </div>
        <div className="info-bottom">{beer.description}</div>
        <div className="creator">
          {beer.contributed_by.slice(0, beer.contributed_by.indexOf("<"))}
        </div>
      </div>
    </div>
  );
};
