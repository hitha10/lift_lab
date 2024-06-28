import React, { useState } from 'react';
import './Calories.css';

const Calories = () => {
  const [meal, setMeal] = useState('');
  const [calories, setCalories] = useState('');
  const [calorieList, setCalorieList] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (meal && calories) {
      const newCalorieEntry = {
        meal,
        calories: parseInt(calories),
      };
      setCalorieList([...calorieList, newCalorieEntry]);
      setTotalCalories(totalCalories + parseInt(calories));
      setMeal('');
      setCalories('');
    }
  };

  return (
    <section className='tracker' id="calorie-tracker">
      <h2>Calorie Tracker</h2>
      <form id="calorie-form" onSubmit={handleSubmit}>
        <label htmlFor="meal">Meal:</label>
        <input
          type="text"
          id="meal"
          name="meal"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          required
        />
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul id="calorie-list">
        {calorieList.map((entry, index) => (
          <li key={index}>{entry.meal}: {entry.calories} calories</li>
        ))}
      </ul>
      <p className='total-calories'>Total Calories: <span id="total-calories">{totalCalories}</span></p>
    </section>
  );
};

export default Calories;