"use client";

import { useState, useEffect } from "react";
import Dashboard from "./component/Dashboard";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("isDarkMode");
    if (savedDarkMode) {
      const darkModeValue = JSON.parse(savedDarkMode);
      setIsDarkMode(darkModeValue);
      if (darkModeValue) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode));
  };

  return (
    <Dashboard isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
  );
};

export default Home;