import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Layout, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import FlowchartNode from './components/FlowchartNode';
import Modal from './components/Modal';
import { governanceData } from './data';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="h-screen w-screen flex bg-gray-50 overflow-hidden font-poppins text-gray-900">
      
      {/* Sidebar Fixa */}
      <aside className="w-[80px] bg-gradient-to-b from-[#225B8E] to-[#2A898D] flex flex-col items-center py-6 shadow-2xl z-30 shrink-0">
        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-8 backdrop-blur-md">
          <Layout className="text-white" />
        </div>
        <div className="flex-1 w-px bg-white/10" />
        <div className="mt-8 text-white/40 text-[10px] font-rubik rotate-180 tracking-[0.2em]" style={{ writingMode: 'vertical-rl' }}>
          LOCKER GOVERNANCE
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative z-0">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm px-8 py-4 shadow-sm z-20 border-b border-gray-100 flex justify-between items-center shrink-0">
          <div>
            <h1 className="font-rubik text-2xl font-bold text-[#225B8E]">
              Plano de Governança
            </h1>
            <p className="text-sm text-gray-500">Fluxo interativo de capacitação</p>
          </div>
          <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 border border-blue-100">
            v2.0 Locker
          </div>
        </header>

        {/* Área de Zoom/Pan */}
        <div className="flex-1 relative bg-[#f8fafc] overflow-hidden">
          {/* Grid Background Decorativo */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
               style={{ 
                 backgroundImage: 'radial-gradient(#225B8E 1px, transparent 1px)', 
                 backgroundSize: '24px 24px' 
               }} 
          />

          <TransformWrapper
            initialScale={0.8}
            minScale={0.2}
            maxScale={2}
            limitToBounds={false}
            centerOnInit={true}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Controles de Zoom Flutuantes */}
                <div className="absolute bottom-8 right-8 flex flex-col gap-2 z-40 bg-white p-2 rounded-lg shadow-lg border border-gray-100">
                  <button onClick={() => zoomIn()} className="p-2 hover:bg-gray-100 rounded text-gray-600" title="Zoom In"><ZoomIn size={20}/></button>
                  <button onClick={() => zoomOut()} className="p-2 hover:bg-gray-100 rounded text-gray-600" title="Zoom Out"><ZoomOut size={20}/></button>
                  <button onClick={() => resetTransform()} className="p-2 hover:bg-gray-100 rounded text-gray-600" title="Reset"><RotateCcw size={20}/></button>
                </div>

                <TransformComponent 
                  wrapperClass="!w-full !h-full cursor-grab active:cursor-grabbing"
                  contentClass="!w-full !h-full"
                >
                  <div className="min-w-[150vw] min-h-[150vh] flex items-center justify-start pl-20 pt-20">
                    <FlowchartNode 
                      data={governanceData} 
                      isRoot={true} 
                      onOpenDetails={setSelectedNode} 
                    />
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </main>

      {/* Modal Global */}
      <Modal 
        isOpen={!!selectedNode} 
        onClose={() => setSelectedNode(null)} 
        data={selectedNode} 
      />
    </div>
  );
}

export default App;