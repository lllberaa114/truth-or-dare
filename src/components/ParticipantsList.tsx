import { motion, AnimatePresence } from 'framer-motion';
import { Participant } from '../types';
import { TrashIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface ParticipantsListProps {
  participants: Participant[];
  onRemove: (id: string) => void;
}

export default function ParticipantsList({ participants, onRemove }: ParticipantsListProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Players</h2>
      <div className="space-y-2 sm:space-y-3">
        <AnimatePresence>
          {participants.map((participant, index) => (
            <motion.div
              key={participant.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="flex items-center justify-between bg-gray-800/50 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <UserCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                <div>
                  <p className="font-semibold text-base sm:text-lg text-white">{participant.name}</p>
                  <p className="text-xs sm:text-sm text-purple-300">
                    Truths: {participant.score.truths} | Dares: {participant.score.dares}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onRemove(participant.id)}
                className="text-red-400 hover:text-red-300 transition-colors p-1.5 sm:p-2 hover:bg-red-500/10 rounded-lg"
              >
                <TrashIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}