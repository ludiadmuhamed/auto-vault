import React, { useEffect, useRef } from 'react';
import { Car, Fuel, TrendingUp } from 'lucide-react';
import Chart from 'chart.js/auto';

const VehicleHighlights = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            
            // Destroy existing chart if it exists
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Vehicle Expenses (₹)',
                        data: [3200, 2800, 4100, 3600, 2900, 3800],
                        backgroundColor: 'rgba(139, 92, 246, 0.6)',
                        borderColor: 'rgba(139, 92, 246, 1)',
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: 'white',
                            bodyColor: 'white',
                            cornerRadius: 8,
                            displayColors: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(156, 163, 175, 0.2)'
                            },
                            ticks: {
                                color: '#6B7280',
                                font: {
                                    size: 11
                                },
                                callback: function(value) {
                                    return '₹' + value;
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: '#6B7280',
                                font: {
                                    size: 11
                                }
                            }
                        }
                    }
                }
            });
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Vehicle Spend Report Card */}
                <div className="lg:col-span-2 p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
                                <Car className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Vehicle Spend Report</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Monthly expenses breakdown</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">₹3,800</p>
                            <p className="text-sm text-emerald-500 flex items-center justify-end">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                +8% vs last month
                            </p>
                        </div>
                    </div>
                    
                    <div className="h-64 w-full mb-4">
                        <canvas ref={chartRef}></canvas>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Fuel</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">₹2,400</p>
                        </div>
                        <div className="text-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Maintenance</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">₹800</p>
                        </div>
                        <div className="text-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Other</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">₹600</p>
                        </div>
                    </div>
                </div>

                {/* Fuel Price Today Card */}
                <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-xl">
                            <Fuel className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Fuel Price Today</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Current rates in your area</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-400">
                            <div>
                                <p className="text-sm font-medium text-red-700 dark:text-red-400">Petrol</p>
                                <p className="text-xs text-red-600 dark:text-red-500">Per Litre</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-red-700 dark:text-red-400">₹94.77</p>
                                <p className="text-xs text-red-600 dark:text-red-500">Delhi</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border-l-4 border-emerald-400">
                            <div>
                                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Diesel</p>
                                <p className="text-xs text-emerald-600 dark:text-emerald-500">Per Litre</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">₹87.67</p>
                                <p className="text-xs text-emerald-600 dark:text-emerald-500">Delhi</p>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Other Cities</h4>
                            <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Mumbai</span>
                                    <span className="font-medium text-gray-900 dark:text-white">₹103.50</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Bangalore</span>
                                    <span className="font-medium text-gray-900 dark:text-white">₹102.92</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Chennai</span>
                                    <span className="font-medium text-gray-900 dark:text-white">₹100.80</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <p className="text-xs text-purple-700 dark:text-purple-400 text-center">
                            Prices updated daily at 6:00 AM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleHighlights;