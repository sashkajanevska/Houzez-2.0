import { useEffect, useState } from "react";

function scrollTo({ x, y }) {
  const scrollOptions = {};

  if (typeof x === "number") {
    scrollOptions.left = x;
  }

  if (typeof y === "number") {
    scrollOptions.top = y;
  }

  scrollOptions.behavior = "smooth";
  window.scrollTo(scrollOptions);
}

export default function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  function updateScrollPosition() {
    setScrollPosition({ x: window.scrollX, y: window.scrollY });
  }

  useEffect(function () {
    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition);

    return function () {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return [scrollPosition, scrollTo];
}
