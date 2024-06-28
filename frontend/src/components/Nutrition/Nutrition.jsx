import React, { useState } from 'react';
import './Nutrition.css'; // Import the CSS file

const Nutrition = () => {
  const [weight, setWeight] = useState(0); // State for user weight input
  const [nutrition, setNutrition] = useState({}); // State for calculated nutrition values

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const calculateNutrition = () => {
    if (weight > 0) {
      // Sample calculations based on weight (adjust as needed)
      const protein = weight * 1.2; // Grams of protein per kg of body weight
      const carbs = weight * 5; // Grams of carbohydrates per kg of body weight
      const fats = weight * 0.8; // Grams of fat per kg of body weight

      setNutrition({
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fats: Math.round(fats),
      });
    } else {
      setNutrition({}); // Clear nutrition values if weight is invalid
    }
  };

  return (
    <div className="nutrition-container">
      <h2>Nutrition & Supplements Calculator</h2>

      <div className="weight-input">
        <label htmlFor="weight">Enter your weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
          placeholder="Weight"
        />
        <button onClick={calculateNutrition}>Calculate</button>
      </div>

      {nutrition.protein && (
        <div className="nutrition-results">
          <h3>Your Recommended Daily Macronutrients:</h3>
          <ul>
            <li>
              Protein: <span>{nutrition.protein} grams</span>
            </li>
            <li>
              Carbohydrates: <span>{nutrition.carbs} grams</span>
            </li>
            <li>
              Fats: <span>{nutrition.fats} grams</span>
            </li>
          </ul>

          {/* Add supplement recommendations (replace with actual logic) */}
          <h3>Supplement Suggestions:</h3>
          <p>
            Based on your weight and calculated macros, consider these supplements
            (consult a healthcare professional for personalized recommendations):
          </p>
          <ul>
            <li>Protein powder (if you struggle to meet protein needs through diet)</li>
            <li>Multivitamin/mineral complex (to fill potential nutrient gaps)</li>
            <li>Omega-3 fatty acids (for heart and brain health)</li>
          </ul>

          {/* Animation (using CSS for better performance) */}
          <div className="loading-animation" style={{ display: weight > 0 ? 'none' : 'block' }}>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <span>Calculating...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nutrition;
