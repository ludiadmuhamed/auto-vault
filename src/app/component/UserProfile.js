"use client";

import { Zap, Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";

const UserProfile = ({ userData, isDarkMode, isLoading = false }) => {
  // Loading skeleton 
  const ProfileSkeleton = () => (
    <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-pulse">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="flex-1 text-center sm:text-left space-y-3 w-full">
          <div className="h-6 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-full max-w-48 mx-auto sm:mx-0"></div>
          <div className="h-4 sm:h-5 bg-gray-200 dark:bg-gray-700 rounded-md w-full max-w-32 mx-auto sm:mx-0"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full max-w-sm mx-auto sm:mx-0"></div>
        </div>
      </div>
    </div>
  );

  const GamificationProgress = ({ current, max, level }) => {
    const percentage = (current / max) * 100;
    const nextLevelXP = max - current;
    
    return (
      <div className="w-full max-w-md">
        {/* Progress Header */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
              <Zap size={14} className="text-white" />
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
              Level {level}
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              {current.toLocaleString()} XP
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {nextLevelXP.toLocaleString()} to next level
            </p>
          </div>
        </div>
        
        <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full relative shadow-sm"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse rounded-full" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-purple-500 rounded-full shadow-lg"
            initial={{ left: "0%" }}
            animate={{ left: `${Math.max(percentage - 2, 0)}%` }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1">
            <Target size={12} className="text-emerald-500" />
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {Math.round(percentage)}% Complete
            </span>
          </div>
          <div className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full">
            <span className="text-xs font-bold text-purple-700 dark:text-purple-300">
              Next: Level {level + 1}
            </span>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  return (
    <motion.div 
      className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
        {/* User Profile */}
        <motion.div 
          className="relative flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative">
            <img
              src={userData.avatar}
              alt={`${userData.name}'s avatar`}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-gradient-to-br from-purple-500 to-pink-500 shadow-lg"
            />
            
            {/* Level Badge */}
            <motion.div 
              className="absolute -bottom-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              <span className="text-xs sm:text-sm font-bold text-white">
                {userData.currentLevel || 5}
              </span>
            </motion.div>
            
            {/* Status Indicator */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"></div>
          </div>
        </motion.div>

        {/* User Info & Progress */}
        <div className="flex-1 text-center sm:text-left space-y-4 w-full min-w-0">
          <div>
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 break-words"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {userData.name}
            </motion.h2>
            
            <motion.div 
              className="flex flex-wrap items-center justify-center sm:justify-start gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md">
                <span className="text-white font-semibold text-sm">
                  {userData.level}
                </span>
              </div>
              
              <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-md">
                <Trophy size={14} className="text-white" />
                <span className="text-white font-semibold text-sm">
                  {userData.tier} Tier
                </span>
              </div>
              
              <div className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-md">
                <span className="text-white font-semibold text-sm">
                  {userData.xp.toLocaleString()} XP
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full"
          >
            <GamificationProgress 
              current={userData.xp} 
              max={userData.maxXp} 
              level={userData.currentLevel || 5}
            />
          </motion.div>

          {/* Achievement */}
          <motion.div 
            className="flex items-center justify-center sm:justify-start gap-4 pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {userData.currentLevel || 5}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Level</p>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                {Math.round((userData.xp / userData.maxXp) * 100)}%
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Progress</p>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <p className="text-lg font-bold text-pink-600 dark:text-pink-400">
                {userData.tier}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Tier</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;