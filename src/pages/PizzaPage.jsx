import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSauce, addToppings } from "../slice/pizzaSlice";
const PizzaPage = () => {
  const pizza = useSelector((store) => store.pizzaInfo);
  const dispatch = useDispatch();
  // const user = useSelector((store)=> store.userInfo);
  // const user = useSelector((store) => store.user);
  // dispatch(addToppings)

  const hanldeOnAddToppings = (toping) => {
    alert(toping);
    // add to redux - store
    // addToppings(tp);

    // addToppings(toping);
    dispatch(addToppings(toping));
    // setToppings
  };
  const hanldeOnAddSauce = (sauce) => {
    alert(sauce);
    // add to redux - store
    dispatch(addSauce(sauce));
  };

  return (
    <div>
      <h1>PIZZA</h1>
      <h2>Toppings:</h2>
      {pizza.toppings.map((item, i) => {
        return <div key={i}>{item}</div>;
      })}
      <h2>Sauce</h2>
      {pizza.sauce.map((item) => {
        return <div>{item}</div>;
      })}
      <h2>Gluten</h2>
      {pizza.gluten.toString()}
      <p>
        <button onClick={() => hanldeOnAddToppings("Anchovies")}>
          ADD Anchovies
        </button>
        <button onClick={() => hanldeOnAddToppings("Olives")}>
          ADD Olives
        </button>
        <button onClick={() => hanldeOnAddToppings("Pineapple")}>
          ADD pineapple
        </button>
      </p>
      <p>
        <button onClick={() => hanldeOnAddSauce("BBQ")}>ADD BBQ</button>
        <button onClick={() => hanldeOnAddSauce("Aoili")}>ADD Aoili</button>
        <button onClick={() => hanldeOnAddSauce("Sweet Chili")}>
          ADD Sweet Chili
        </button>
      </p>
      <p>Clear Everything</p>
      <p>Toggle Gluten</p>
    </div>
  );
};
export default PizzaPage;
