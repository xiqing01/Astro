import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Circle = ({ className, img, minRotate = 0, maxRotate = 0, animate = false }) => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [minRotate, maxRotate]);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(
          "bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full relative ",
          className
        )}
      >
        <motion.div 
          animate={animate && { rotate: 360, }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        
          className={twMerge("absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/30 border-[6px] border-transparent ", animate && "border-t-fuchsia-500/40")} 
        />
        <motion.img
          src={`/assets/images/${img}.png`}
          alt={`${img} 3D image`}
          className="size-[140px]"
          ref={imgRef}
          style={{ rotate: rotate }}
        />
      </div>
    </div>
  );
};

export default Circle;
