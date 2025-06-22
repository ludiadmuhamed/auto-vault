"use client";

import { Moon, Sparkles, Sun } from "lucide-react";
import { useState } from "react";

const Header = ({isDarkMode, setIsDarkMode}) => {
    const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
    return (
         <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles size={20} color="white" />
            </div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>
              CRED Garage
            </h1>
          </div>
          
          <button
            onClick={toggleDarkMode}
            style={{
              padding: '12px',
              borderRadius: '12px',
              backgroundColor: isDarkMode ? '#404040' : '#fff',
              border: `1px solid ${isDarkMode ? '#555' : '#e0e0e0'}`,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isDarkMode ? <Sun size={20} color="#FCD34D" /> : <Moon size={20} color="#6B7280" />}
          </button>
        </div>
    )
};

export default Header;