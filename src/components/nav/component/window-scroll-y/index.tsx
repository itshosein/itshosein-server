import { FC, useEffect, useState } from "react";

interface IWindowScrollYProps {
  scrollCB: (scroll: number) => void;
}

const WindowScrollY: FC<IWindowScrollYProps> = ({ scrollCB }) => {
  useEffect(() => {
    if (window.scrollY > 0) {
      scrollCB(window.scrollY);
    }
    window.addEventListener("scroll", () => scrollCB(window.scrollY));

    return () =>
      window.removeEventListener("scroll", () => scrollCB(window.scrollY));
  }, []);
  return null;
};

export default WindowScrollY;
