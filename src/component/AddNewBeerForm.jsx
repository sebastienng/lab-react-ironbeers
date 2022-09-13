import axios from "axios";
import React, { useState } from "react";
import "./AddNewBeer.css";

export const AddNewBeerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((response) => {
        console.log("response status", response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="new-beer-form">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
        />
        <label htmlFor="first_brewed">First brewed:</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          onChange={handleChange}
        />
        <label htmlFor="brewers_tips">Brewers Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          onChange={handleChange}
        />
        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          onChange={handleChange}
        />
        <label htmlFor="contributed_by">Contributed by:</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          onChange={handleChange}
        />
        <input type="submit" value="Add beer" />
      </form>
    </div>
  );
};
