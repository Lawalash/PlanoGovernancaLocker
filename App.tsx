import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, ArrowRight } from 'lucide-react';
import FlowchartNode from './components/FlowchartNode';
import { NodeData } from './types';

// Data Definition
const initialData: NodeData = {
  id: "root",
  title: "Plano de Capacitação",
  description: "Jornada Locker & TABI",
  lessonsLearned: "Sempre validar a flag de turma com TI (Caso Nubank).",
  children: [
    {
      id: "1",
      title: "Treinamento Locker e TABI",
      description: "Capacitação técnica para operação",
      lessonsLearned: "Obrigatório para Supervisores (TABI) e Atendentes (Locker).",
      children: [
        {
          id: "1-1",
          title: "Preparação do Material",
          description: "Validação de vídeos e trilhas",
          lessonsLearned: "Vídeos devem estar na versão 3.0.41 do Agente.",
          children: [
             { 
               id: "1-1-1", 
               title: "Identificação do Analista", 
               description: "Definir focal de pessoas", 
               lessonsLearned: "Cobrar conclusão via plataforma Clique." 
             }
          ]
        }
      ]
    },
    {
      id: "2",
      title: "Comunicados Robbyson",
      description: "Engajamento e Gamificação",
      lessonsLearned: "Gamificação aumenta adesão em 30% na primeira semana."
    },
    {
      id: "3",
      title: "Ajuste Wallpaper",
      description: "Reforço Visual nas Máquinas",
      lessonsLearned: "O Wallpaper deve conter instrução de Reboot."
    }
  ]
};

// Premium easing curve for smooth transitions
const transitionSettings = {
  duration: 0.8,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => setCurrentSlide(1);

  return (
    <div className="w-full h-screen bg-gray-50 overflow-hidden font-poppins text-gray-800 relative">
      <AnimatePresence initial={false}>
        {currentSlide === 0 ? (
          <SlideCover key="cover" onNext={nextSlide} />
        ) : (
          <SlideFlowchart key="flowchart" data={initialData} />
        )}
      </AnimatePresence>
    </div>
  );
};

// Slide 1: Cover
const SlideCover: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0.5, transition: transitionSettings }}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-td-blue-dark to-td-cyan-dark text-white z-10"
    >
      <div className="text-center space-y-4 p-8">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-rubik font-bold text-5xl md:text-7xl tracking-tight"
        >
          Plano de Governança Locker
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl font-light opacity-90"
        >
          Estratégia de Eficiência Fora da PA
        </motion.p>
      </div>

      <motion.button
        onClick={onNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-10 right-10 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full hover:bg-white/20 transition-all font-rubik cursor-pointer z-20"
      >
        <span>Iniciar Apresentação</span>
        <ArrowRight size={20} />
      </motion.button>
    </motion.div>
  );
};

// Slide 2: Flowchart
const SlideFlowchart: React.FC<{ data: NodeData }> = ({ data }) => {
  return (
    <motion.div 
      initial={{ x: "100%" }}
      animate={{ x: 0, transition: transitionSettings }}
      exit={{ x: "100%", transition: transitionSettings }}
      className="absolute inset-0 flex w-full h-full bg-gray-50 z-20"
    >
      {/* Sidebar */}
      <aside className="w-[80px] h-full bg-gradient-to-b from-td-blue-dark to-td-cyan-dark flex flex-col items-center justify-between py-6 shrink-0 z-10 shadow-xl">
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
          <Layout size={20} />
        </div>
        <div className="text-white/50 text-xs font-rubik rotate-180" style={{ writingMode: 'vertical-rl' }}>
          LOCKER GOVERNANCE
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        {/* Header */}
        <header className="px-8 py-6 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-20">
          <h2 className="text-3xl font-rubik font-bold text-td-blue-dark">
            Plano de Capacitação
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-td-blue-mid to-td-cyan mt-2 rounded-full" />
        </header>

        {/* Canvas Area */}
        <div className="flex-1 overflow-auto p-12 no-scrollbar cursor-grab active:cursor-grabbing">
          <div className="min-w-max min-h-max flex items-center justify-start">
            <FlowchartNode data={data} isRoot={true} />
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default App;