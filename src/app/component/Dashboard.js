"use client";

import React, { useState, useEffect } from 'react';
import { Gift, Car, Fuel, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import UserProfile from './UserProfile';
import Benefits from './Benefits';
import VehicleHighlights from './VehicleHighlights';

const Dashboard = ({ isDarkMode, toggleDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [benefits, setBenefits] = useState([]);

  // Mock data loading
  useEffect(() => {
    const loadData = async () => {

      await new Promise(resolve => setTimeout(resolve, 2000));

      setUserData({
        name: "James Rudiger",
        level: "Elite Member",
        xp: 8500,
        maxXp: 10000,
        currentLevel: 5,
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rewardPoints: 12450,
        maxRewardPoints: 15000,
        recentPointsEarned: 320,
        tier: "Platinum"
      });

      setBenefits([
        {
          id: 1,
          title: "Fuel Cashback",
          description: "Get 5% cashback on fuel purchases at partner stations",
          icon: <Fuel size={24} />,
          value: "5%",
          ctaText: "Claim Now",
          color: "#FF6B35",
          gradient: "from-orange-500 to-red-500",
          isNew: false,
          savings: "₹1,200"
        },
        {
          id: 2,
          title: "Premium Insurance",
          description: "Comprehensive car coverage with zero depreciation",
          icon: <Shield size={24} />,
          value: "₹50K",
          ctaText: "Activate",
          color: "#4ECDC4",
          gradient: "from-teal-500 to-cyan-500",
          isNew: true,
          savings: "₹8,000"
        },
        {
          id: 3,
          title: "Service Discount",
          description: "20% off on car services at authorized centers",
          icon: <Car size={24} />,
          value: "20%",
          ctaText: "Book Now",
          color: "#45B7D1",
          gradient: "from-blue-500 to-indigo-500",
          isNew: false,
          savings: "₹2,400"
        },
        {
          id: 4,
          title: "Exclusive Offers",
          description: "Special partner deals and premium rewards",
          icon: <Gift size={24} />,
          value: "NEW",
          ctaText: "Explore",
          color: "#96CEB4",
          gradient: "from-emerald-500 to-green-500",
          isNew: true,
          savings: "₹5,000"
        }
      ]);

      setIsLoading(false);
    };

    loadData();
  }, []);

  const SkeletonCard = ({ index }) => (
    <motion.div
      className="p-4 sm:p-6 rounded-2xl bg-gray-100 dark:bg-gray-700 overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="animate-pulse">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-600 rounded-xl"></div>
          <div className="w-12 h-5 sm:w-16 sm:h-6 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
        </div>
        <div className="h-5 sm:h-6 bg-gray-200 dark:bg-gray-600 rounded-lg mb-3 w-3/4"></div>
        <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
        <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3 mb-4"></div>
        <div className="h-10 sm:h-12 bg-gray-200 dark:bg-gray-600 rounded-xl"></div>
      </div>

      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </motion.div>
  );

  const SkeletonProfile = () => (
    <motion.div
      className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-2xl bg-gray-100 dark:bg-gray-700 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 animate-pulse">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-1 w-full">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto sm:mx-0"></div>
          <div className="flex-1 space-y-3 text-center sm:text-left w-full">
            <div className="h-6 sm:h-8 bg-gray-200 dark:bg-gray-600 rounded-lg w-full max-w-48 mx-auto sm:mx-0"></div>
            <div className="h-4 sm:h-5 bg-gray-200 dark:bg-gray-600 rounded-md w-full max-w-32 mx-auto sm:mx-0"></div>
            <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-600 rounded-md w-full max-w-64 mx-auto sm:mx-0"></div>
          </div>
        </div>
        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto lg:mx-0"></div>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </motion.div>
  );

  const SkeletonVehicleHighlights = () => (
    <motion.div
      className="mb-6 sm:mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        <div className="xl:col-span-2 p-4 sm:p-6 rounded-2xl bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
          <div className="animate-pulse">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-600 rounded-xl"></div>
              <div className="flex-1">
                <div className="h-5 sm:h-6 bg-gray-200 dark:bg-gray-600 rounded mb-2 w-full max-w-48"></div>
                <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-600 rounded w-full max-w-32"></div>
              </div>
            </div>
            <div className="h-48 sm:h-64 bg-gray-200 dark:bg-gray-600 rounded-lg mb-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-14 sm:h-16 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="p-4 sm:p-6 rounded-2xl bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
          <div className="animate-pulse">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-600 rounded-xl"></div>
              <div className="flex-1">
                <div className="h-5 sm:h-6 bg-gray-200 dark:bg-gray-600 rounded mb-2 w-full max-w-32"></div>
                <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-600 rounded w-full max-w-24"></div>
              </div>
            </div>
            <div className="space-y-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-16 sm:h-20 bg-gray-200 dark:bg-gray-600 rounded-xl"></div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen transition-all duration-300 p-2 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Loading State */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SkeletonProfile />

              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="h-6 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-32 sm:w-48 mb-4 sm:mb-6 animate-pulse"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                  {[...Array(4)].map((_, i) => (
                    <SkeletonCard key={i} index={i} />
                  ))}
                </div>
              </motion.div>

              <SkeletonVehicleHighlights />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* User Profile Section */}
              <UserProfile userData={userData} isDarkMode={isDarkMode} />

              {/* Benefits Section */}
              <Benefits benefits={benefits} isDarkMode={isDarkMode} />

              {/* Vehicle Highlights */}
              <VehicleHighlights isDarkMode={isDarkMode} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;