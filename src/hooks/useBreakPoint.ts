import { useMediaQuery } from "./useMediaQuery";

type Breakpoint = "mobile" | "tablet" | "desktop";

export const useBreakPoint = (): Breakpoint => {
  const isMobile = useMediaQuery("(max-width: 639.99px");
  const isTablet = useMediaQuery(
    "(min-width : 640px) and (max-width: 1199.99px)"
  );

  if (isMobile) return "mobile";
  if (isTablet) return "tablet";
  return "desktop";
};
