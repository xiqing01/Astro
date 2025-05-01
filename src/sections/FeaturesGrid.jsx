import {  useRef } from "react";
import CutCornerButton from "../components/CutCornerButton";
import TextButton from "../components/TextButton"
import { motion, useScroll,useTransform } from "motion/react"

const listItems = [
  "Build and deploy your own blockchain",
  "Create and manage smart contracts",
  "Integrate with existing blockchain networks",
];

const FeaturesGrid = () => {
  const torusKontRef = useRef(null)
  const hemisphereRef = useRef(null)
  const coneRef = useRef(null)
  const hemisphereTwoRef = useRef(null)

  const { scrollYProgress: torusKontScrollYProgress } =  useScroll({
    target: torusKontRef,
    offset: ["start end","end start"], 
  })

  
  const torusY = useTransform(torusKontScrollYProgress, [0, 1], [100, -100])
  const torusRotate = useTransform(torusKontScrollYProgress, [0, 1], [30, -30])
  const hemisphereY = useTransform(torusKontScrollYProgress, [0, 1], [100, -100])
  const  hemisphereRotate  = useTransform(torusKontScrollYProgress, [0, 1], [30, -30])

  const {scrollYProgress : secondScrollYProgress} = useScroll({
    target: coneRef,
    offset: ["start end","end start"],
  })


  const coneY = useTransform(secondScrollYProgress, [0, 1], [-100, 100])
  const coneRotate = useTransform(secondScrollYProgress, [0, 1], [-30, 30])
  const hemisphereTwoY = useTransform(secondScrollYProgress, [0, 1], [-100, 100])
  const hemisphereTwoRotate = useTransform(secondScrollYProgress, [0, 1], [-30, 30])

  return (
    <section className="py-24 overflow-x-clip">
      <div className="container mx-auto text-amber-50 ">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80 mx-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of blockchain.
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                Bkockfirge provides a comprehensive suite of tools and services
                designed to simplify the development and deployment of
                blockchain applications.
              </p>
              <ul className="flex flex-col gap-8 mt-12 md:mt-14">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center size-4  outline-4 outline-fuchsia-500/20 rounded-[100%]">
                      <div className="size-1 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-base md:text-xl font-bold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12 md:mt-36">
                <CutCornerButton children="Get Started" />
                <TextButton children="Learn More" />
              </div>
            </div>
            <div className="hidden md:block" >
              <div className="relative inline-flex z-0">
                <motion.img
                  src="/assets/images/torus-knot.png"
                  alt="Torus Knot 3D image"
                  className="size-96 max-w-none "
                  ref={torusKontRef}
                  style={{
                    translateY: torusY,
                    rotate: torusRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere Knot 3D image" 
                  className="absolute size-80 top-3/4 -z-10 scale-x-[-1]"
                  ref={hemisphereRef}
                  style={{
                    translateY: hemisphereY,
                    rotate: hemisphereRotate,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 top-0 z-0 ">
                <motion.img
                  src="/assets/images/cone.png"
                  alt="Cone 3D image"
                  className="size-96 max-w-none rotate-12"
                  ref={coneRef}
                  style={{
                    translateY: coneY,
                    rotate: coneRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere Knot 3D image"
                  className="absolute size-80 top-3/4 -z-10 left-0"
                  ref={hemisphereTwoRef}
                  style={{
                    translateY: hemisphereTwoY,
                    rotate: hemisphereTwoRotate,
                  }}
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-black text-4xl md:text-5xl lg:text-6xl">Blockforge leads the way.</h2>
              <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 md:mt-14 gap-6">
                <p>
                  Blockforge is at the forefront of blockchain development,
                  providing developers with the tools and resources they need to
                  build and deploy their own blockchain applications.
                </p>
                <p>
                  With Blockforge, developers can easily create and manage smart
                  contracts, integrate with existing blockchain networks, and
                  deploy their own blockchain solutions.
                </p>
              </div>

              <div className="flex gap-8 mt-12 md:mt-36">
                <CutCornerButton children="Get Started" />
                <TextButton children="Learn More" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
