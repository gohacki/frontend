import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('/food');
        setFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };
    fetchFoodItems();
  }, []);

  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foodItems.map((item) => (
          <li key={item._id}>{item.name} - {item.calories} calories</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
