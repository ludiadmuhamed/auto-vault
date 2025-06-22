import { ChevronRight, Gift } from "lucide-react";

const Benefits = ({ benefits }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <Gift size={24} className="text-purple-500 mr-3" />
        Your Benefits
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200 relative overflow-hidden"
          >
            <div className="flex items-start justify-between mb-4">
              <div 
                className="p-3 rounded-xl text-white flex items-center justify-center"
                style={{ backgroundColor: benefit.color }}
              >
                {benefit.icon}
              </div>
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: benefit.color }}
              >
                {benefit.value}
              </span>
            </div>
            
            <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              {benefit.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {benefit.description}
            </p>
            
            <button className="w-full px-4 py-3 rounded-xl font-semibold border-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white cursor-pointer flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
              {benefit.ctaText}
              <ChevronRight size={16} className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;