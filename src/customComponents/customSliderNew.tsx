import { useEffect, useState, useRef } from "react";
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
  const { items, autoScrollInterval = 5000 } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, autoScrollInterval);
    return () => clearInterval(timer);
  }, [autoScrollInterval]);

  const getCardPosition = (index: number) => {
    const prev = (currentIndex - 1 + items.length) % items.length;
    const next = (currentIndex + 1) % items.length;

    if (index === currentIndex) return "center";
    if (index === prev) return "left";
    if (index === next) return "right";
    return "hidden";
  };

  const getCardStyles = (position: string) => {
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
  };

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
        });

        // Animate in
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
  }, [items.length, isInitialized]);
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
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });

      card.style.pointerEvents = position === "center" ? "auto" : "none";
    });
  }, [currentIndex, items.length, isInitialized]);

  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      gsap.killTweensOf(cardsRef.current);
    };
  }, []);

  return (
    <div className="overflow-x-hidden  h-full my-2 flex flex-col items-center justify-center">
      <AnimatePresence>
        <div className="flex items-center justify-center">
          <button className="border hover:border-cyan-600  shadow-2xl  my-5 px-5 py-2 rounded-4xl cursor-pointer">
            Get more info of
            <motion.span
              key={currentIndex}
              initial={{
                opacity: 0,

              }}
              animate={{
                opacity: 1,

              }}
              exit={{
                opacity: 0,

              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="text-cyan-500"
            >
              {" "}
              {items[currentIndex].name}
            </motion.span>{" "}
            using AI
          </button>
        </div>
      </AnimatePresence>
      <div className="w-full h-full flex-1">
        <div className="flex w-full flex-wrap relative  h-[90%]">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="absolute h-full shadow-2xl will-change-transform"
              style={{
                pointerEvents: "none",
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
            onClick={prevSlide}
            className="absolute left-4 top-[50%] z-50 bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
            aria-label="Previous"
          >
            <ArrowBackOutlinedIcon />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-[50%] z-50 bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
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
