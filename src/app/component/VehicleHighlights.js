"use client";

import React, { useEffect, useRef } from 'react';
import { Car, Fuel, TrendingUp, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';

const VehicleHighlights = ({ isDarkMode }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
            gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.4)');
            gradient.addColorStop(1, 'rgba(139, 92, 246, 0.1)');

            const borderGradient = ctx.createLinearGradient(0, 0, 0, 400);
            borderGradient.addColorStop(0, 'rgba(139, 92, 246, 1)');
            borderGradient.addColorStop(1, 'rgba(236, 72, 153, 1)');

            chartInstanceRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Vehicle Expenses (₹)',
                        data: [3200, 2800, 4100, 3600, 2900, 3800],
                        backgroundColor: gradient,
                        borderColor: borderGradient,
                        borderWidth: 3,
                        fill: 'origin',
                        tension: 0.4,
                        pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointHoverBackgroundColor: 'rgba(236, 72, 153, 1)',
                        pointHoverBorderColor: '#ffffff',
                        pointHoverBorderWidth: 3,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            titleColor: isDarkMode ? 'white' : '#1F2937',
                            bodyColor: isDarkMode ? 'white' : '#1F2937',
                            borderColor: 'rgba(139, 92, 246, 0.5)',
                            borderWidth: 1,
                            cornerRadius: 12,
                            displayColors: false,
                            titleFont: { size: 12, weight: 'bold' },
                            bodyFont: { size: 11 },
                            padding: 12,
                            caretPadding: 8,
                            callbacks: {
                                title: function(context) {
                                    return `${context[0].label} 2025`;
                                },
                                label: function(context) {
                                    return `Expenses: ₹${context.parsed.y.toLocaleString()}`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(156, 163, 175, 0.2)',
                                drawBorder: false
                            },
                            ticks: {
                                color: isDarkMode ? '#9CA3AF' : '#6B7280',
                                font: { size: 10 },
                                padding: 8,
                                callback: function(value) {
                                    return '₹' + value.toLocaleString();
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: isDarkMode ? '#9CA3AF' : '#6B7280',
                                font: { size: 10 },
                                padding: 8
                            }
                        }
                    },
                    elements: {
                        line: {
                            borderJoinStyle: 'round',
                            borderCapStyle: 'round'
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    }
                }
            });
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [isDarkMode]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        }
    };

    return (
        <motion.div 
            className="mb-6 sm:mb-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
                {/* Vehicle Spend Report Card */}
                <motion.div 
                    className="xl:col-span-2 p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <motion.div 
                                className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Car className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </motion.div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Vehicle Spend Trend</h3>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Monthly expenses over time</p>
                            </div>
                        </div>
                        <div className="text-center sm:text-right">
                            <motion.p 
                                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                            >
                                ₹3,800
                            </motion.p>
                            <motion.p 
                                className="text-xs sm:text-sm text-emerald-500 flex items-center justify-center sm:justify-end"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                +8% vs last month
                            </motion.p>
                        </div>
                    </div>
                    
                    <motion.div 
                        className="h-48 sm:h-64 w-full mb-4 sm:mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <canvas ref={chartRef}></canvas>
                    </motion.div>
                    
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        {[
                            { label: 'Fuel', amount: '₹2,400', color: 'from-red-500 to-orange-500', percentage: '63%' },
                            { label: 'Maintenance', amount: '₹800', color: 'from-blue-500 to-cyan-500', percentage: '21%' },
                            { label: 'Other', amount: '₹600', color: 'from-emerald-500 to-green-500', percentage: '16%' }
                        ].map((item, index) => (
                            <motion.div 
                                key={item.label}
                                className="text-center p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-md transition-all duration-200"
                                whileHover={{ scale: 1.05, y: -2 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                            >
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">{item.label}</p>
                                <p className={`text-base sm:text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                    {item.amount}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.percentage}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Fuel Price Today Card - Keeping the same */}
                <motion.div 
                    className="p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                >
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <motion.div 
                            className="p-2 sm:p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Fuel className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.div>
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Fuel Price Today</h3>
                            <div className="flex items-center gap-1">
                                <MapPin size={10} className="text-gray-500 sm:w-3 sm:h-3" />
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Kozhikode, Kerala</p>
                            </div>
                        </div>
                    </div>

                    <motion.div 
                        className="space-y-3 sm:space-y-4 mb-4 sm:mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.div 
                            className="flex justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border-l-4 border-red-400 hover:shadow-md transition-all duration-200"
                            whileHover={{ scale: 1.02, x: 4 }}
                        >
                            <div>
                                <p className="text-sm font-medium text-red-700 dark:text-red-400">Petrol</p>
                                <p className="text-xs text-red-600 dark:text-red-500">Per Litre</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xl sm:text-2xl font-bold text-red-700 dark:text-red-400">₹102.85</p>
                                <p className="text-xs text-red-600 dark:text-red-500">Kozhikode</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="flex justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border-l-4 border-emerald-400 hover:shadow-md transition-all duration-200"
                            whileHover={{ scale: 1.02, x: 4 }}
                        >
                            <div>
                                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Diesel</p>
                                <p className="text-xs text-emerald-600 dark:text-emerald-500">Per Litre</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xl sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400">₹89.12</p>
                                <p className="text-xs text-emerald-600 dark:text-emerald-500">Kozhikode</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl mb-3 sm:mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <MapPin size={12} className="sm:w-4 sm:h-4" />
                            Other Cities in Kerala
                        </h4>
                        <div className="space-y-2 text-xs">
                            {[
                                { city: 'Kochi', price: '₹103.20' },
                                { city: 'Thiruvananthapuram', price: '₹102.95' },
                                { city: 'Thrissur', price: '₹102.78' }
                            ].map((item, index) => (
                                <motion.div 
                                    key={item.city}
                                    className="flex justify-between hover:bg-white/50 dark:hover:bg-gray-600/50 p-2 rounded transition-colors"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                >
                                    <span className="text-gray-600 dark:text-gray-400">{item.city}</span>
                                    <span className="font-medium text-gray-900 dark:text-white">{item.price}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="p-2 sm:p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Clock size={10} className="text-purple-600 sm:w-3 sm:h-3" />
                            <p className="text-xs text-purple-700 dark:text-purple-400 text-center">
                                Prices updated daily at 6:00 AM IST
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default VehicleHighlights;