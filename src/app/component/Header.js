import { Moon, Sparkles, Sun } from "lucide-react";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
          <Sparkles size={20} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">
          CRED Garage
        </h1>
      </div>

      <button
        onClick={toggleDarkMode}
        className="p-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
      >
        {isDarkMode ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default Header;