import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  const [items, setItems] = useState(itemData);
  const [isDarkMode, setDarkMode] = useState(false);
  
  function changeMode(){
    // console.log("i was clicked")
    setDarkMode(!isDarkMode)
  }
  
  let appClass = isDarkMode ? "App dark" : "App light"
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>{isDarkMode ? "Light" : "Dark"} Mode </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
