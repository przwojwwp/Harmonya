import { useEffect, useRef, useState } from "react";

export const useTestimonialsSlider = (length: number) => {
  const [visibleIndex, setVisibleIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isTransitionComplete, setIsTransitionComplete] = useState(true);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sliderDirectionRef = useRef<"next" | "previous">("next");

  useEffect(() => {
    startSlider(sliderDirectionRef.current);
    return () => clearInterval(intervalRef.current!);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(intervalRef.current!);
      } else {
        startSlider(sliderDirectionRef.current);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const startSlider = (direction: "next" | "previous" = "next") => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    sliderDirectionRef.current = direction;
    intervalRef.current = setInterval(() => {
      if (sliderDirectionRef.current === "previous") {
        handlePrev();
      } else {
        handleNext();
      }
    }, 5000);
  };

  const slideToIndex = (
    index: number,
    direction: "next" | "previous" = "next",
    absolute: boolean = false
  ) => {
    if (!isTransitionComplete) return;

    sliderDirectionRef.current = direction;
    setIsTransitionComplete(false);
    setIsTransitioning(true);

    absolute ? setVisibleIndex(index) : setVisibleIndex((prev) => prev + index);
    startSlider(direction);

    setTimeout(() => {
      setIsTransitionComplete(true);
    }, 700);
  };

  const handleNext = () => slideToIndex(1, "next");
  const handlePrev = () => slideToIndex(-1, "previous");

  const goTo = (index: number) => {
    const direction = index + 1 > visibleIndex ? "next" : "previous";
    slideToIndex(index + 1, direction, true);
  };

  const fixLoopAfterTransition = () => {
    if (visibleIndex === 0) {
      setIsTransitioning(false);
      setVisibleIndex(length);
    } else if (visibleIndex === length + 1) {
      setIsTransitioning(false);
      setVisibleIndex(1);
    }
  };

  const realIndex = (() => {
    if (visibleIndex === 0) return length - 1;
    if (visibleIndex === length + 1) return 0;
    return visibleIndex - 1;
  })();

  return {
    visibleIndex,
    isTransitioning,
    realIndex,
    handleNext,
    handlePrev,
    goTo,
    fixLoopAfterTransition,
  };
};
