"use client";

import Dashboard from "./component/Dashboard";

const Home = () => {
  const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"))

  return (
    <Dashboard isDarkMode={isDarkMode} />
  )
};

export default Home;