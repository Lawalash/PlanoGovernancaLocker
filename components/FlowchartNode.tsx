import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ChevronRight, Circle } from 'lucide-react';
import clsx from 'clsx';
import { NodeData } from '../types';

interface FlowchartNodeProps {
  data: NodeData;
  isRoot?: boolean;
}

const FlowchartNode: React.FC<FlowchartNodeProps> = ({ data, isRoot = false }) => {
  const [isOpen, setIsOpen] = useState(isRoot); // Root starts open
  const [showTooltip, setShowTooltip] = useState(false);
  
  const hasChildren = data.children && data.children.length > 0;

  const toggleOpen = () => {
    if (hasChildren) setIsOpen(!isOpen);
  };

  const toggleTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="flex items-center">
      {/* Node Card */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative flex items-center z-10"
      >
        <div
          onClick={toggleOpen}
          className={clsx(
            "w-72 p-5 rounded-xl border-l-4 shadow-lg cursor-pointer transition-all duration-300 relative group select-none",
            isRoot 
              ? "bg-white border-td-blue-dark ring-2 ring-td-blue-dark/10" 
              : "bg-white border-td-cyan hover:shadow-xl hover:-translate-y-1"
          )}
        >
          {/* Header Row */}
          <div className="flex justify-between items-start mb-2">
            <h3 className={clsx(
              "font-rubik font-bold text-lg leading-tight",
              isRoot ? "text-td-blue-dark" : "text-gray-800"
            )}>
              {data.title}
            </h3>
            
            {/* Tooltip Icon */}
            {data.lessonsLearned && (
              <div className="relative">
                <button
                  onClick={toggleTooltip}
                  className={clsx(
                    "p-1.5 rounded-full transition-colors",
                    showTooltip ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-400 hover:text-yellow-500 hover:bg-yellow-50"
                  )}
                >
                  <Lightbulb size={16} />
                </button>
                
                {/* Tooltip Content */}
                <AnimatePresence>
                  {showTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 top-8 w-64 p-3 bg-gray-800 text-white text-sm rounded-lg shadow-xl z-50 border border-gray-700"
                    >
                      <div className="font-rubik font-semibold text-yellow-400 mb-1 text-xs uppercase tracking-wider">
                        Lições Aprendidas
                      </div>
                      <p className="font-light leading-relaxed text-gray-200">
                        {data.lessonsLearned}
                      </p>
                      <div className="absolute -top-1 right-2 w-3 h-3 bg-gray-800 rotate-45 border-t border-l border-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          <p className="text-sm text-gray-500 font-light leading-relaxed">
            {data.description}
          </p>

          {/* Expand Indicator */}
          {hasChildren && (
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md border border-gray-100 text-td-blue-mid">
               <ChevronRight 
                 size={16} 
                 className={clsx("transition-transform duration-300", isOpen ? "rotate-180" : "")} 
               />
            </div>
          )}
        </div>
      </motion.div>

      {/* Connection Line & Children */}
      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center"
          >
            {/* Horizontal Connector from Parent to Children Column */}
            <div className="w-12 h-0.5 bg-gray-300" />

            {/* Children Column */}
            <div className="flex flex-col gap-6 border-l-2 border-gray-300 py-4 pl-0 relative">
               {data.children!.map((child, index) => (
                 <div key={child.id} className="relative flex items-center pl-12">
                   {/* Horizontal Connector for individual child */}
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-gray-300">
                      {/* Dot on the vertical line */}
                      <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-300" />
                   </div>
                   
                   {/* Recursive Node */}
                   <FlowchartNode data={child} />
                 </div>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlowchartNode;