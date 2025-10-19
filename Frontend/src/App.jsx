import { useState } from "react";
import ECommerceApp from "./components/Ecomm";
import Gym from "./components/Gym";
import LMS from "./components/Learning";
import InformativeWebsite from "./components/InfoWeb";
import LogisticsComponent from "./components/Logistics";
import React from 'react';
import WikipediaClone from "./components/InfoWeb";

function App() {
   const [selected, setSelected] = useState ('shopping');

  const handleSelect = (item) => {
    setSelected(item);
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white">
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
       <h1 className="text-2xl md:text-3xl font-bold">AllInOne</h1>
          
      <ul className="flex space-x-8">
        {['shopping', 'learning', 'logistics','fitness','InfoGainer'].map((item) => (
          <li
            key={item}
            className={`cursor-pointer ${
              selected === item
                ? 'text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => handleSelect(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalize first letter */}
          </li>
        ))}
      </ul>
    </nav>

    {selected==='fitness'&&<Gym/>}
    {selected==='shopping'&&<ECommerceApp/>}
     {selected==='learning'&&<LMS/>}
     {selected==='Brainstroming'&&<InformativeWebsite/>}
     {selected==='logistics'&&<LogisticsComponent/>}
      {selected==='InfoGainer'&&<WikipediaClone/>}
    </div>

  );
  
}

export default App
