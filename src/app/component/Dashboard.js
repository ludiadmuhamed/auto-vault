"use client";

import React, { useState, useEffect } from 'react';
import { Gift, Car, Fuel, Shield } from 'lucide-react';
import Header from './Header';
import UserProfile from './UserProfile';
import Benefits from './Benefits';
import VehicleHighlights from './VehicleHighlights';

const Dashboard = ({ isDarkMode, setIsDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [benefits, setBenefits] = useState([]);

  // Mock data loading
  useEffect(() => {
    const loadData = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      setUserData({
        name: "Arjun Kumar",
        level: "Elite Member",
        xp: 8500,
        maxXp: 10000,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rewardPoints: 12450,
        tier: "Platinum"
      });

      setBenefits([
        {
          id: 1,
          title: "Fuel Cashback",
          description: "Get 5% cashback on fuel",
          icon: <Fuel size={24} />,
          value: "5%",
          ctaText: "Claim Now",
          color: "#FF6B35"
        },
        {
          id: 2,
          title: "Premium Insurance",
          description: "Comprehensive car coverage",
          icon: <Shield size={24} />,
          value: "₹50K",
          ctaText: "Activate",
          color: "#4ECDC4"
        },
        {
          id: 3,
          title: "Service Discount",
          description: "20% off on car services",
          icon: <Car size={24} />,
          value: "20%",
          ctaText: "Book Now",
          color: "#45B7D1"
        },
        {
          id: 4,
          title: "Exclusive Offers",
          description: "Special partner deals",
          icon: <Gift size={24} />,
          value: "NEW",
          ctaText: "Explore",
          color: "#96CEB4"
        }
      ]);

      setIsLoading(false);
    };

    loadData();
  }, []);

  const SkeletonCard = () => (
    <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-700 animate-pulse">
      <div className="h-15 bg-gray-200 dark:bg-gray-600 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
    </div>
  );

  const SkeletonProfile = () => (
    <div className="flex items-center gap-4 mb-8 animate-pulse">
      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2 w-36"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-24"></div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-300 p-8 ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* Loading State */}
        {isLoading ? (
          <div>
            <SkeletonProfile />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* User Profile Section */}
            <UserProfile userData={userData} isDarkMode={isDarkMode} />

            {/* Benefits Section */}
            <Benefits benefits={benefits} />

            {/* Vehicle Highlights */}
            <VehicleHighlights />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;