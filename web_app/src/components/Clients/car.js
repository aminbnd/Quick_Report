import React, { useEffect, useState } from "react";
import useToken from "../app/useToken";
import "./client.css";
/**
 * Car Component
 * @param {*} props 
 * @returns Car Component
 */

export default function Car(props){
    const { token, setToken } = useToken();

    const Token = "Bearer ".concat(token);
    const [cars, setCar] = useState([]);
    console.log(props.id)
  useEffect(() => {
    const fetchUserCar = async () => {
      const response = await fetch("http://102.37.113.211/api/company/client/car/" + props.id
      , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      });
     

      const cars = await response.json();


      setCar(cars);
    };
    fetchUserCar();
  },[]);
  const arr = [];
  for (const x in cars) {
    arr.push(cars[x]);
  }
  let i = 1;
    return (
        <di> {arr.map((user) => <div className="row">
        <ul>
          <h4 class="h2">Car and Insurance {i++} </h4>
          <li>Matricule: {user.id}</li>
          <li>Type : {user.type_c} </li>
          <li>Model: {user.Mark}</li>
          <li> Date : {user.created_at}</li>
        </ul>{" "}
        
      </div>)}
      </di>
       
    )
};