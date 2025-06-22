"use client";

import { Star, Trophy } from "lucide-react";

const UserProfile = ({ cardStyle, userData, isDarkMode }) => {
  const CircularProgress = ({ value, max, size = 120 }) => {
    const percentage = (value / max) * 100;
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg
          width={size}
          height={size}
          style={{ transform: 'rotate(-90deg)' }}
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
            style={{
              transition: 'stroke-dashoffset 1s ease-out'
            }}
          />
        </svg>
        <div style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: isDarkMode ? '#fff' : '#000'
          }}>
            {Math.round(percentage)}%
          </span>
          <span style={{
            fontSize: '12px',
            color: isDarkMode ? '#999' : '#666'
          }}>
            Complete
          </span>
        </div>
      </div>
    );
  };
  
  return (
    <div style={{ ...cardStyle, marginBottom: '32px' }}>
      <div style={{
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        alignItems: window.innerWidth < 768 ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: '24px'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '24px',
          flex: 1,
          minWidth: 0 // Allows flex items to shrink below their content size
        }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <img
              src={userData.avatar}
              alt="Profile"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #8B5CF6'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              right: '-8px',
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Star size={16} color="white" />
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: 'bold', 
              margin: '0 0 4px 0',
              wordBreak: 'break-word'
            }}>
              {userData.name}
            </h2>
            <p style={{
              color: '#8B5CF6',
              fontWeight: '600',
              margin: '0 0 12px 0'
            }}>
              {userData.level}
            </p>

            {/* XP Progress Bar */}
            <div style={{ 
              width: '100%',
              maxWidth: '250px', // Maximum width on larger screens
              minWidth: '200px'   // Minimum width to prevent too much shrinking
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '14px',
                marginBottom: '8px'
              }}>
                <span>Level Progress</span>
                <span>{userData.xp}/{userData.maxXp} XP</span>
              </div>
              <div style={{
                width: '100%',
                height: '12px',
                backgroundColor: isDarkMode ? '#404040' : '#e0e0e0',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
                  width: `${(userData.xp / userData.maxXp) * 100}%`,
                  transition: 'width 1s ease-out'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Points */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '32px',
          flexShrink: 0 // Prevents this section from shrinking
        }}>
          <CircularProgress value={userData.rewardPoints} max={15000} />
          <div style={{ textAlign: 'right' }}>
            <p style={{
              fontSize: '36px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: '0 0 4px 0'
            }}>
              {userData.rewardPoints.toLocaleString()}
            </p>
            <p style={{
              fontSize: '14px',
              color: isDarkMode ? '#999' : '#666',
              margin: '0 0 8px 0'
            }}>
              Reward Points
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Trophy size={16} color="#FCD34D" style={{ marginRight: '4px' }} />
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#FCD34D'
              }}>
                {userData.tier} Tier
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserProfile;