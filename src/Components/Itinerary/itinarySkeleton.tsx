import { motion } from "motion/react";
import Skeleton from "../../customComponents/customSkeleton";

const ItinerarySkeleton = ({ day }: { day: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay:day*0.6,
        ease: "easeInOut",
      }}
      className=" w-full mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-300 animate-pulse-slow"
    >
      <div className="bg-white p-6">
        <motion.p
          className="font-semibold my-2 text-lg"
         
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Day {day+1} is getting Generated
          </motion.span>
          <motion.span
            className="inline-block ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ...
          </motion.span>
        </motion.p>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Skeleton width="70%" height="32px" className="mb-3" />
            <Skeleton width="40%" height="24px" />
          </div>
          <Skeleton variant="circular" width="32px" height="32px" />
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 py-4 px-4">
              <Skeleton width="80%" height="20px" className="mx-auto" />
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {[1].map((index) => (
          <div key={index} className="relative">
            <div className="flex gap-4">
              <div className="relative mt-5 flex-shrink-0">
                <Skeleton variant="circular" width="30px" height="30px" />
              </div>

              <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Skeleton variant="circular" width="20px" height="20px" />
                    <Skeleton width="150px" height="20px" />
                  </div>
                  <div className="text-right">
                    <Skeleton
                      width="100%"
                      height="28px"
                      className="mb-2 ml-auto"
                    />
                    <Skeleton width="100%" height="16px" className="ml-auto" />
                  </div>
                </div>

                <Skeleton width="85%" height="24px" className="mb-3 " />
                <Skeleton width="100%" height="16px" className="mb-2" />
                <Skeleton width="95%" height="16px" className="mb-2" />
                <Skeleton width="70%" height="16px" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ItinerarySkeleton;
