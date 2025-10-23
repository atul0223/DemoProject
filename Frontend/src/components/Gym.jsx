import React, { useState } from 'react';
import axios from 'axios';

function Gym() {
  const [foodInput, setFoodInput] = useState('');
  const [nutritionData, setNutritionData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setNutritionData('');


    try {
      const response = await axios.get('https://demoproject-2jzl.onrender.com/calculate', {
       foodInput
      });
      console.log(response.data);
      
      setNutritionData(response.data);
    } catch (err) {
      setError('Error fetching data. Please buy credits in open ai.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar Section */}
      <nav className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#hero" className="text-white font-bold text-xl">GymFit</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#hero" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#calculator" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calculator</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl font-bold md:text-6xl">Welcome to GymFit</h1>
          <p className="mt-4 text-xl md:text-2xl">Achieve your fitness goals with our expert guidance.</p>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80" alt="Gym Equipment" className="w-full md:w-1/2 rounded-lg shadow-md" />
            <div className="mt-8 md:mt-0 md:ml-8">
              <p className="text-gray-700">At GymFit, we're dedicated to helping you build a healthier lifestyle. Our state-of-the-art facilities and certified trainers ensure you get the best workout experience.</p>
              <p className="mt-4 text-gray-700">Join our community and track your progress with our innovative tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://media.istockphoto.com/id/972833328/photo/male-personal-trainer-helping-sportswoman-to-do-exercises-with-barbell-at-gym.jpg?s=612x612&w=0&k=20&c=5kIxaobVDjjDrYvv8qNB2lGJoBImzHvj-csu30o_lZY=" alt="Personal Training" className=" mx-auto" />
              <h3 className="text-xl font-bold text-center mt-4">Personal Training</h3>
              <p className="text-gray-700 text-center mt-2">Customized workouts tailored to your goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://www.shutterstock.com/image-photo/people-gym-lunges-fitness-workout-260nw-2475090499.jpg" alt="Group Classes" className=" mx-auto" />
              <h3 className="text-xl font-bold text-center mt-4">Group Classes</h3>
              <p className="text-gray-700 text-center mt-2">Fun and motivating sessions with peers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://media.istockphoto.com/id/1423997728/photo/top-view-asian-man-and-woman-healthy-eating-salad-after-exercise-at-fitness-gym.jpg?s=612x612&w=0&k=20&c=abDb3WKAnawDnVikydDSN17YOZc3hsplIY65lJjNXaE=" alt="Nutrition Advice" className="mx-auto" />
              <h3 className="text-xl font-bold text-center mt-4">Nutrition Advice</h3>
              <p className="text-gray-700 text-center mt-2">Expert tips on balanced diets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Calorie Calculator</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <input
              type="text"
              value={foodInput}
              onChange={(e) => setFoodInput(e.target.value)}
              placeholder="Enter food item (e.g., 'apple')"
              className="w-full p-3 border border-gray-300 rounded mb-4 text-black"
            />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={loading}>
              {loading ? 'Calculating...' : 'Calculate Nutrition'}
            </button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {nutritionData && (
            <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Nutritional Values:</h3>
              <p className="mt-4 text-gray-700">{nutritionData}</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p>&copy; 2023 GymFit. All rights reserved.</p>
          <p>Contact us: email@example.com | +1 234 567 890</p>
        </div>
      </footer>
    </div>
  );
}

export default Gym;
