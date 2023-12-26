'use client'
// pages/index.js or your desired page

import { useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLineLogin = async () => {
    try {
      // Set loading state to true to indicate that the request is in progress
      setIsLoading(true);

      // Make a request to your Gin backend endpoint that triggers Line Login
      const response = await fetch("https://2f24-184-22-19-255.ngrok-free.app/line/login");
      const data = await response.json()
        window.location.href = data.url
    } catch (error) {
      console.error('Error redirecting to Line Login:', error);
    } finally {
      // Set loading state back to false when the request is completed (success or error)
      setIsLoading(false);
    }
  };

  return (
      <div>
        <h1>Your Next.js App</h1>
        <button onClick={handleLineLogin} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login with Line'}
        </button>
        {/* You can add content or UI elements here */}
      </div>
  );
};

export default Home;
