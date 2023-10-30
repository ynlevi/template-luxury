"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
function MainImage() {
  const [imageIndex, setImageIndex] = useState(0);
  const [scope, animate] = useAnimate();

  const ref = useRef();
  useEffect(() => {
    animate(scope.current, { opacity: 1 }, { duration: 1 });
    setTimeout(() => {
      animate(scope.current, { opacity: 0 }, { duration: 1 });
    }, 9500);
    const interval = setInterval(
      () =>
        setImageIndex((prev) => {
          animate(scope.current, { opacity: 1 }, { duration: 1 });
          setTimeout(() => {
            animate(scope.current, { opacity: 0 }, { duration: 1 });
          }, 9500);
          return prev + 1 > images.length - 1 ? 0 : prev + 1;
        }),
      10000
    );

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="main-img-height w-full ">
      <img
        ref={scope}
        src={images[imageIndex]}
        transition={{ duration: 1 }}
        style={{ opacity: 0 }}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
export default MainImage;

const images = [
  "https://www.yanivsite.com/wp-content/uploads/2023/06/mg_9067-copy_optimized-scaled-1.jpg",
  "https://www.yanivsite.com/wp-content/uploads/2023/06/mg_3922-copy_optimized-scaled-1.jpg",
  "https://www.yanivsite.com/wp-content/uploads/2023/06/mg_9586_optimized-scaled-1.jpg",
  "https://www.yanivsite.com/wp-content/uploads/2023/06/image-45_optimized.1-scaled-1-2048x1366.jpg",
  "https://www.yanivsite.com/wp-content/uploads/2023/06/GR01636-scaled-1.jpg",
];
