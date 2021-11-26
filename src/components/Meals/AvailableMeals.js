import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useState, useEffect } from "react";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setIsError] = useState(null);
  useEffect(fetchMeals, []);

  async function fetchMeals() {
    setLoading(true);
    try {
      let response = await fetch(
        "https://react-http-69ae2-default-rtdb.firebaseio.com/meals.json"
      );
      console.log("response", response);
      setLoading(false);
      if (!response.ok) {
        //  ok is not mean you have got the data,it just mean have response
        throw new Error("Something went wrong!");
      } else {
        let result = await response.json();
        console.log("result", result);
        if (result !== null) {
          setMeals(result);
        } else {
          setIsError("no data");
        }
      }
    } catch (error) {
      setIsError(error);
    }
  }

  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <section className={classes.meals}>
      {Loading && <p>Loading data...</p>}
      {Error && <p>{Error}</p>}
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
