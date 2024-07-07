// src/components/AddFood.js
import axios from '../axiosConfig';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFood = () => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/food', { name, calories });
      navigate('/food-list');
    } catch (error) {
      console.error('Error adding food:', error);
    }
  };

  return (
    <div>
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Food Name"
        />
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Calories"
        />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default AddFood;
