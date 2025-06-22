"use client";

import React, { useState, useEffect } from 'react';
import { Gift, Car, Fuel, Shield } from 'lucide-react';
import Header from './Header';
import UserProfile from './UserProfile';
import Benefits from './Benefits';
import Highlights from './Highlights';

const Dashboard = ({ isDarkMode, setIsDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [benefits, setBenefits] = useState([]);

  // Mock data loading
  useEffect(() => {
    const originalBackground = document.body.style.background;
    const originalColor = document.body.style.color;

    document.body.style.background = isDarkMode
      ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)';
    document.body.style.color = isDarkMode ? '#fff' : '#000';

    return () => {
      document.body.style.background = originalBackground;
      document.body.style.color = originalColor;
    };
  }, [isDarkMode]);

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
    <div style={{
      padding: '24px',
      borderRadius: '16px',
      backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5',
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    }}>
      <div style={{
        height: '60px',
        backgroundColor: isDarkMode ? '#404040' : '#e0e0e0',
        borderRadius: '8px',
        marginBottom: '16px'
      }}></div>
      <div style={{
        height: '16px',
        backgroundColor: isDarkMode ? '#404040' : '#e0e0e0',
        borderRadius: '4px',
        marginBottom: '8px'
      }}></div>
      <div style={{
        height: '12px',
        backgroundColor: isDarkMode ? '#404040' : '#e0e0e0',
        borderRadius: '4px',
        width: '70%'
      }}></div>
    </div>
  );

  const SkeletonProfile = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '32px',
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        backgroundColor: isDarkMode ? '#404040' : '#e0e0e0',
        borderRadius: '50%'
      }}></div>
      <div style={{ flex: 1 }}>
        <div style={{
          height: '16px',
          backgroundColor: isDarkMode ? '#404040' : '#e0e0e0',
          borderRadius: '4px',
          marginBottom: '8px',
          width: '150px'
        }}></div>
        <div style={{
          height: '12px',
          backgroundColor: isDarkMode ? '#404040' : '#e0e0e0',
          borderRadius: '4px',
          width: '100px'
        }}></div>
      </div>
    </div>
  );

  const containerStyle = {
    minHeight: '100vh',
    color: isDarkMode ? '#fff' : '#000',
    transition: 'all 0.3s ease',
    padding: '32px 16px'
  };

  const cardStyle = {
    backgroundColor: isDarkMode ? 'rgba(45, 45, 45, 0.8)' : 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    padding: '32px',
    border: `1px solid ${isDarkMode ? '#404040' : '#e0e0e0'}`,
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .benefit-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .cta-button {
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* Loading State */}
        {isLoading ? (
          <div>
            <SkeletonProfile />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {[...Array(4)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* User Profile Section */}
            <UserProfile cardStyle={cardStyle} userData={userData} isDarkMode={isDarkMode} />

            {/* Benefits Section */}
            <Benefits cardStyle={cardStyle} benefits={benefits} isDarkMode={isDarkMode} />

            {/* Quick Stats */}
            <Highlights cardStyle={cardStyle} isDarkMode={isDarkMode} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;