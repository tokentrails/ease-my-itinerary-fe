import { useEffect, useState, useRef, useCallback } from "react";
import { gsap } from "gsap";
import type { iSliderItem } from "../utils/customeTypo";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  items: iSliderItem[];
  autoScrollInterval?: number;
  onClick: (item: iSliderItem, index: number) => void;
}

const CustomeSlider = (props: Props) => {
  const { items, autoScrollInterval = 5000, onClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextSlide, autoScrollInterval);
  }, [autoScrollInterval, nextSlide]);
  const manualNextSlide = useCallback(() => {
    nextSlide();
    resetTimer();
  }, [nextSlide, resetTimer]);

  const manualPrevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    resetTimer();
  }, [items.length, resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetTimer]);

  const getCardPosition = useCallback(
    (index: number) => {
      const prev = (currentIndex - 1 + items.length) % items.length;
      const next = (currentIndex + 1) % items.length;

      if (index === currentIndex) return "center";
      if (index === prev) return "left";
      if (index === next) return "right";
      return "hidden";
    },
    [currentIndex, items.length]
  );

  const getCardStyles = useCallback((position: string) => {
    switch (position) {
      case "center":
        return {
          x: "22%",
          width: "70%",
          scale: 1,
          opacity: 1,
          zIndex: 30,
        };
      case "left":
        return {
          x: "-50%",
          scale: 0.5,
          width: "50%",
          opacity: 0.8,
          zIndex: 10,
        };
      case "right":
        return {
          x: "150%",
          width: "50%",
          scale: 0.5,
          opacity: 0.8,
          zIndex: 10,
        };
      default:
        return {
          x: "0%",
          scale: 0.5,
          opacity: 0,
          width: "0%",
          zIndex: 0,
        };
    }
  }, []);

  useEffect(() => {
    if (!isInitialized && cardsRef.current.length === items.length) {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      const tl = gsap.timeline();

      items.forEach((_, index) => {
        const card = cardsRef.current[index];
        if (!card) return;

        const position = getCardPosition(index);
        const styles = getCardStyles(position);

        gsap.set(card, {
          x: styles.x,
          width: styles.width,
          scale: 0.5,
          opacity: 0,
          zIndex: styles.zIndex,
          force3D: true,
        });

        tl.to(
          card,
          {
            scale: styles.scale,
            opacity: styles.opacity,
            duration: 0.5,
            ease: "back.out(1.2)",
          },
          index * 0.1
        );

        card.style.pointerEvents = position === "center" ? "auto" : "none";
      });

      timelineRef.current = tl;
      setIsInitialized(true);
    }
  }, [items.length, isInitialized, getCardPosition, getCardStyles]);

  useEffect(() => {
    if (!isInitialized) return;
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    items.forEach((_, index) => {
      const card = cardsRef.current[index];
      if (!card) return;

      const position = getCardPosition(index);
      const styles = getCardStyles(position);

      gsap.to(card, {
        x: styles.x,
        width: styles.width,
        scale: styles.scale,
        opacity: styles.opacity,
        zIndex: styles.zIndex,
        duration: 0.6,
        ease: "power2.inOut",
        overwrite: "auto",
        force3D: true,
      });

      card.style.pointerEvents = position === "center" ? "auto" : "none";
    });
  }, [
    currentIndex,
    items.length,
    isInitialized,
    getCardPosition,
    getCardStyles,
  ]);

  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      gsap.killTweensOf(cardsRef.current);
    };
  }, []);

  return (
    <div className="overflow-x-hidden h-full my-2 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center min-h-[60px]">
        <button
          onClick={() => {
            onClick(items[currentIndex], currentIndex);
          }}
          className="border hover:border-cyan-600 shadow-2xl my-5 px-5 py-2 rounded-full cursor-pointer inline-flex items-center gap-1"
        >
          <span>Get more info of</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="text-cyan-500 overflow-hidden font-semibold inline-block"
            >
              {items[currentIndex].name}
            </motion.span>
          </AnimatePresence>
          <span>using AI</span>
        </button>
      </div>

      <div className="w-full h-full flex-1">
        <div className="flex w-full flex-wrap relative h-[90%]">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="absolute h-full shadow-2xl will-change-transform"
              style={{
                pointerEvents: "none",
              }}
              onClick={() => {
                onClick(items[index], index);
              }}
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={item.image_url[0]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={manualPrevSlide}
            className="absolute left-4 top-[50%] -translate-y-1/2 z-50 bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ArrowBackOutlinedIcon />
          </button>

          <button
            onClick={manualNextSlide}
            className="absolute right-4 top-[50%] -translate-y-1/2 z-50 bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ArrowForwardOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomeSlider;
