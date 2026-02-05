import React from 'react';
import { motion } from 'framer-motion';

export const ScanBackground: React.FC = () => {
  return (
    <>
      {/* BACKGROUND LAYER: Plasma / Ambient for Light Sections */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[20%] w-[80vw] h-[80vw] bg-electric/10 rounded-full blur-[100px] mix-blend-multiply"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[-20%] w-[60vw] h-[60vw] bg-electric/10 rounded-full blur-[120px] mix-blend-multiply"
        />
        <motion.div 
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[70vw] bg-electric/5 rounded-full blur-[150px] mix-blend-multiply"
        />
      </div>

      {/* FOREGROUND LAYER: Scanning Line Overlay */}
      <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
         <motion.div
            initial={{ top: "-20%" }}
            animate={{ top: "120%" }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 w-full h-[1px] bg-electric/40 shadow-[0_0_20px_2px_rgba(0,82,255,0.4)]"
         />
         <motion.div
            initial={{ top: "-20%" }}
            animate={{ top: "120%" }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 w-full h-[20vh] bg-gradient-to-b from-transparent via-electric/5 to-transparent"
         />
      </div>
    </>
  );
};
