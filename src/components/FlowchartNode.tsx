import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ChevronRight } from 'lucide-react'; 
import clsx from 'clsx';
import { NodeData } from '../types';

interface FlowchartNodeProps {
  data: NodeData;
  isRoot?: boolean;
  onOpenDetails: (data: NodeData) => void; 
}

const FlowchartNode: React.FC<FlowchartNodeProps> = ({ data, isRoot = false, onOpenDetails }) => {
  const [isOpen, setIsOpen] = useState(isRoot);
  const hasChildren = data.children && data.children.length > 0;

  const toggleOpen = () => {
    if (hasChildren) setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative flex items-center z-10"
      >
        <div
          onClick={toggleOpen}
          className={clsx(
            "w-80 p-5 rounded-xl border-l-4 shadow-sm cursor-pointer transition-all duration-300 relative group select-none flex flex-col gap-2",
            isRoot 
              ? "bg-white border-blue-900 ring-2 ring-blue-900/5 shadow-lg" 
              : "bg-white border-cyan-500 hover:shadow-lg hover:-translate-y-1"
          )}
        >
          <div className="flex justify-between items-start">
            <h3 className={clsx(
              "font-rubik font-bold text-lg leading-tight pr-2",
              isRoot ? "text-blue-900" : "text-gray-800"
            )}>
              {data.title}
            </h3>
            
            {/* Botão de Detalhes (Abre o Modal) */}
            {(data.fullDescription || data.link) && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenDetails(data);
                }}
                className="text-cyan-600 bg-cyan-50 p-1.5 rounded-full hover:bg-cyan-100 hover:text-cyan-800 transition-colors shrink-0"
                title="Ver detalhes"
              >
                <Info size={18} />
              </button>
            )}
          </div>

          <p className="text-sm text-gray-500 font-light leading-snug line-clamp-3">
            {data.description}
          </p>

          {/* Seta de Expansão */}
          {hasChildren && (
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md border border-gray-100 text-cyan-600 z-20">
               <ChevronRight 
                 size={16} 
                 className={clsx("transition-transform duration-300", isOpen ? "rotate-180" : "")} 
               />
            </div>
          )}
        </div>
      </motion.div>

      {/* Renderização Recursiva */}
      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            {/* Conector Pai -> Filhos */}
            <div className="w-16 h-0.5 bg-gray-300" />

            <div className="flex flex-col gap-4 border-l-2 border-gray-300 py-4 pl-0 relative">
               {data.children!.map((child) => (
                 <div key={child.id} className="relative flex items-center pl-16">
                   {/* Conector Filho Individual */}
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-0.5 bg-gray-300">
                      <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gray-300 border-2 border-white" />
                   </div>
                   
                   <FlowchartNode 
                      data={child} 
                      onOpenDetails={onOpenDetails} 
                   />
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