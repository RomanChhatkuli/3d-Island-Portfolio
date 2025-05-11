import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand } from 'lucide-react';

const HandAnimation = ({ onDismiss }) => {
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);

  useEffect(() => {

    setTimeout(() =>{
      dismiss();
    },2000)

    const dismiss = () => {
      setIsDragging(true);
      setTimeout(onDismiss, 100);
    };

    const handleStart = () => {
      isDraggingRef.current = true;
      dismiss();
    };

    const handleMove = () => {
      if (isDraggingRef.current) {
        dismiss();
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        dismiss();
      }
    };

    window.addEventListener('mousedown', handleStart);
    window.addEventListener('touchstart', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('mouseup', handleMove);
    window.addEventListener('touchend', handleMove);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('mousedown', handleStart);
      window.removeEventListener('touchstart', handleStart);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleMove);
      window.removeEventListener('touchend', handleMove);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onDismiss]);

  return (
<AnimatePresence>
  {!isDragging && (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="flex flex-col items-center select-none"
        initial={{ x: -20 }}
        animate={{ x: [-20, 20, -20] }} 
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div
          className="bg-blue-100 rounded-full p-2"  // Decreased padding to reduce size
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        >
          <Hand className="w-8 h-8 text-black" strokeWidth={1.5} />  
        </motion.div>
        <motion.p
          className="text-black font-medium text-sm bg-white/80 px-2 py-1 rounded-full mt-1 w-36"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Drag TO EXPLORE
        </motion.p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

  );
};

export default HandAnimation;
