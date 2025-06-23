"use client";

import { ChevronRight, Gift, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Benefits = ({ benefits }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <motion.div
      className="mb-6 sm:mb-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mr-3">
            <Gift size={20} className="text-white sm:w-6 sm:h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Your Benefits
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Exclusive rewards tailored for you
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
          <TrendingUp size={14} className="text-emerald-600 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            ₹16,600 Total Savings
          </span>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
        variants={containerVariants}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            className="group relative p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} text-white shadow-lg`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    {benefit.icon}
                  </div>
                </motion.div>
                <motion.span
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${benefit.gradient} shadow-md`}
                  whileHover={{ scale: 1.05 }}
                >
                  {benefit.value}
                </motion.span>
              </div>

              <h4 className="text-base sm:text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {benefit.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-2">
                {benefit.description}
              </p>

              <div className="mb-4 p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Potential Savings</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {benefit.savings}
                  </span>
                </div>
              </div>

              <motion.button
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold border-none bg-gradient-to-r ${benefit.gradient} text-white cursor-pointer flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-105 text-sm`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {benefit.ctaText}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight size={14} className="ml-2 sm:w-4 sm:h-4" />
                </motion.div>
              </motion.button>
            </div>

            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Benefits; 