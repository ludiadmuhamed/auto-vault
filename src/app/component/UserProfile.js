"use client";

import { Star, Trophy } from "lucide-react";

const UserProfile = ({ userData, isDarkMode }) => {
  const CircularProgress = ({ value, max, size = 120 }) => {
    const percentage = (value / max) * 100;
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r="45"
            stroke={isDarkMode ? '#404040' : '#e0e0e0'}
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r="45"
            stroke="#8B5CF6"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {Math.round(percentage)}%
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            Complete
          </span>
        </div>
      </div>
    );
  };
  
  return (
    <div className="mb-8 p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-6 flex-1 min-w-0">
          <div className="relative flex-shrink-0">
            <img
              src={userData.avatar}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-purple-500"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
              <Star size={16} className="text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 break-words">
              {userData.name}
            </h2>
            <p className="text-purple-500 font-semibold mb-3">
              {userData.level}
            </p>

            {/* XP Progress Bar */}
            <div className="w-full max-w-xs min-w-48">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Level Progress</span>
                <span>{userData.xp}/{userData.maxXp} XP</span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-md overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                  style={{ width: `${(userData.xp / userData.maxXp) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Points */}
        <div className="flex items-center gap-8 flex-shrink-0">
          <CircularProgress value={userData.rewardPoints} max={15000} />
          <div className="text-right">
            <p className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
              {userData.rewardPoints.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Reward Points
            </p>
            <div className="flex items-center justify-end">
              <Trophy size={16} className="text-yellow-400 mr-1" />
              <span className="text-sm font-semibold text-yellow-400">
                {userData.tier} Tier
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;