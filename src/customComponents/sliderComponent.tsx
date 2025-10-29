import { motion } from "framer-motion";
import type { iSliderItem } from "../utils/customeTypo";
import { useEffect, useState } from "react";

interface Props {
  items: iSliderItem[];
  autoScrollInterval?: number;
  onClick: (item: iSliderItem, index: number) => void;
}

const SliderComponent = (props: Props) => {
  const { items, autoScrollInterval = 50000000 } = props;
  const [stack, setStack] = useState(items);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling || items.length === 0) return;

    const timer = setInterval(() => {
      handleSwipe("left");
    }, autoScrollInterval);

    return () => clearInterval(timer);
  }, [isAutoScrolling, autoScrollInterval, items.length]);

  //   useEffect(() => {
  //     onItemChange?.(stack[0]);
  //   }, [stack, onItemChange]);

  const handleSwipe = (dir: "left" | "right") => {
    setIsAutoScrolling(false);
    setDirection(dir);
    setStack((prev) => {
      const newStack = [...prev];
      if (dir === "right") {
        newStack.unshift(newStack.pop()!);
      } else {
        newStack.push(newStack.shift()!);
      }
      return newStack;
    });

    setTimeout(() => setIsAutoScrolling(true), 500);
  };

  const getRotation = (index: number) => {
    if (index === 0) return 0;
    if (index === 1) return 5;
    if (index === 2) return -8;
    if (index === 3) return 7;
    if (index === 4) return 3;
    return 0;
  };
  const getOpacity = (index: number) => {
    if (index === 0) return 1;

    if (index === 1 || index === 2) return 0.8;
    if (index === 3 || index === 4) return 0.6;
    return 0.4;
  };
  const getScale = (index: number) => {
    if (index === 0) return 1;
    if (index === 1 || index === 2) return 0.9;
    if (index === 3 || index === 4) return 0.9;
    return 0.4;
  };

  const getZIndex = (index: number) => {
    return Math.max(0, 100 - index * 10);
  };

  const getTransform = (index: number) => {
    if (index === 0) return { y: 0, x: 30 };
    if (index === 1) return { y: 20, x: -10 };
    if (index === 2) return { y: 20, x: 30 };
    if (index === 3) return { y: 20, x: 10 };
    if (index === 4) return { y: 20, x: 20 };
    return { y: 0, x: 0 };
  };

  if (items.length === 0) return null;

  const currentItem = stack[0];

  return (
    <div className=" overflow-x-hidden   my-2 flex flex-col items-center justify-center">
      <div className="w-full h-full  flex-1">
        <div className="relative  h-[60vh]  sm:w-[300px] md:w-[50%] lg:w-[80%]    flex pb-6 justify-center ">
          {stack.map((item, index) => {
            const transform = getTransform(index);
            const rotation = getRotation(index);
            const scale = getScale(index);
            const zIndex = getZIndex(index);
            const opacity = getOpacity(index);
            return (
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  y: transform.y,
                  x: transform.x,
                  scale: scale,
                  rotate: rotation,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                exit={{
                  y: direction === "right" ? 100 : -100,
                  x: direction === "right" ? 100 : -100,
                  opacity: 0,
                  scale: 0.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className={`absolute sm:w-[300px] md:w-[60%] lg:w-[90%] shadow-2xl h-full rounded-3xl overflow-hidden ${
                  index === 0 && "hover:cursor-pointer"
                }`}
              >
                <motion.img
                  src={item.image_url[0]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {index == 0 && (
                  <motion.div
                    initial={{ display: "none", opacity: 0, y: 100 }}
                    animate={{ display: "block", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                    }}
                    style={{
                      background: "rgba(0, 0, 0, 0.89)",
                    }}
                    className="absolute text-white bottom-0 w-full left-0 p-5 z-100"
                  >
                    <p className="font-bold text-lg">{item.name}</p>
                    <p className="text-sm sm:block hidden">
                      {item.description}
                    </p>

                    <motion.div className="text-cyan-500 rounded-3xl w-fit text-sm my-2 py-2">

                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
        <motion.div
          key={`title-${currentItem.name}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center mt-8"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            {currentItem.name}
          </h2>
        </motion.div>
        <div className="flex justify-center items-center mt-5 px-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSwipe("right")}
            className="px-6 py-2  bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors"
          >
            ←
          </motion.button>

          <motion.div
            key={`dots-${currentItem.name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="flex gap-2 mx-4"
          >
            {items.map((item) => (
              <div
                key={item.name}
                className={`h-1.5 rounded-full duration-500 transition-all ${
                  currentItem.name === item.name
                    ? "bg-cyan-800 w-8"
                    : "bg-slate-300 w-1.5"
                }`}
              />
            ))}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSwipe("left")}
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors"
          >
            →
          </motion.button>
        </div>

        {/* Item Title */}
      </div>
    </div>
  );
};
export default SliderComponent;
