import { useCallback, useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const callback = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrollingUp(currentScrollY < scrollY);
    setScrollY(currentScrollY);
  }, [scrollY]);
  useEffect(() => {
    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, [callback]);

  return { scrollY, isScrollingUp };
}

export default useScrollDirection;
