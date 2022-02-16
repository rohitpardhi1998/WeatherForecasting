import React, { useEffect, useState } from "react";
import "../css/style.css";
import { SiArchlinux } from "react-icons/si";

const Yu = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("delhi");

  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5ea50074d6d72eceb708d42c894fe961`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.main);
      });
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>no data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                {" "}
                <SiArchlinux />
                {search}
              </h2>
              <h1 className="temp">{city.temp} Degree Celcius</h1>
              <h3 className="tempmin_max">
                Min:{city.temp_min} Cel |max {city.temp_max} Cel
              </h3>
              <h3 className="tempmin_max">Pressure:{city.pressure}</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Yu;
