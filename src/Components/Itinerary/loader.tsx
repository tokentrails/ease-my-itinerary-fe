import { AnimatePresence, motion } from "motion/react";

const Loader = ({
  messages,
  positionClasses = "max-w-[300px] md:max-w-[350px]",
}: {
  messages: string;
  positionClasses?: string;
}) => {
  return (
    <motion.div
      key="loader-message"
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        y: -20,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed bg-gradient-to-bl from-[#2093EF]/10 overflow-hidden to-[#2093EF]/10 z-1000 flex items-center  justify-center px-6 py-4 rounded-2xl ${positionClasses}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#2093EF]/10 via-[#2093EF]/20 to-[#2093EF]/10 rounded-2xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="relative flex-shrink-0"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-[#2093EF] opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-[#2093EF] opacity-20"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2093EF] to-[#1a7ac7]">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
        </div>
      </motion.div>

      <motion.div className="ml-4 flex-1 relative z-10">
         <AnimatePresence mode="wait">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={messages}
          className="font-semibold text-gray-800 text-sm md:text-base"
        >
          {messages}
        </motion.p>
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
      >
        
      </motion.div>
    </motion.div>
  );
};

export default Loader;
