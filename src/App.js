import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddFoodItem from './components/AddFoodItem';
import FoodList from './components/FoodList';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<FoodList />} />
        <Route path="/add-food" element={<AddFoodItem />} />
        <Route path="/food-list" element={<FoodList />} />
      </Routes>
    </div>
  );
};

export default App;
