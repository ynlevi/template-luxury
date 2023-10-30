"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";
function MainImage() {
  const [imageIndex, setImageIndex] = useState(0);
  const [scope, animate] = useAnimate();

  const ref = useRef();
  useEffect(() => {
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
    <div className="absolute inset-0 w-full h-screen z-0 lg:relative">
      <motion.img
        ref={scope}
        src={images[imageIndex]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-full w-full object-cover "
      />
      <div
        className="absolute inset-0  h-screen w-scree flex items-end bg-theme-dark z-20 "
        style={{ backgroundColor: "rgba(26, 5, 7, 0.45)" }}
      >
        <div className="h-fit w-11/12 ml-auto mb-10 mx-auto ">
          <h1 className="text-5xl text-theme-yellow font-bold tracking-wider lg:text-6xl">
            Yaniv
            <br />
            Smadar
          </h1>
          <h2 className="text-xl text-theme-yellow font-semibold tracking-wider mt-1 lg:text-2xl">
            live in Israel, feel in America.
          </h2>
        </div>
      </div>
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
