import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-3 py-6 sm:px-4 sm:py-12 max-w-3xl"
      >
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-4xl sm:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text mb-6 sm:mb-12"
        >
          Truth or Dare
        </motion.h1>
        <div className="backdrop-blur-sm bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl border border-white/10">
          {children}
        </div>
      </motion.div>
    </div>
  );
}