"use client";

import { useState } from "react";
import Dashboard from "./component/Dashboard";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return <Dashboard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
};

export default Home;