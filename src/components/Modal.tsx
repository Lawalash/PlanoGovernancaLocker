import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FileText } from 'lucide-react';
import { NodeData } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: NodeData | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 p-6 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    <FileText size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Detalhes</span>
                  </div>
                  <h2 className="text-2xl font-rubik font-bold text-white leading-tight">
                    {data.title}
                  </h2>
                </div>
                <button 
                  onClick={onClose}
                  className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="text-gray-700 font-poppins leading-relaxed whitespace-pre-wrap text-base">
                  {data.fullDescription || data.description}
                </div>

                {data.link && (
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <a 
                      href={data.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                    >
                      <ExternalLink size={18} />
                      {data.link.label}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;