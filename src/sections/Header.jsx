import { useEffect, useState } from "react";
import CutCornerButton from "../components/CutCornerButton";
import Hexagon from "../components/Hexagon";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const navLink = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsOpen(false)
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[isOpen])

  return (
    <>
      <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg text-amber-50 ">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center h-24 md:h-28">
            <div>
              <img src="/assets/images/logo.svg" alt="Blockforge Logo" />
            </div>

            <div className="flex gap=4 items-center">
              <CutCornerButton
                className="hidden md:inline-flex"
                children="Get Started"
              />
              <div
                className="size-10 relative"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-5 h-0.5 bg-zinc-300 -translate-y-1 transition",
                      isOpen && "rotate-45 translate-y-0"
                    )}
                  ></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-5 h-0.5 bg-zinc-300 translate-y-1 transition",
                      isOpen && "-rotate-45 translate-y-0"
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0}}
            transition={{ duration: 0.5 }}
            className="fixed size-full top-0 left-0 z-30 bg-zinc-900 overflow-hidden"
          >
            <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 md:mt-28 z-0">
              <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 -z-10">
                <Hexagon size={700} />
              </div>
              <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 -z-10">
                <Hexagon size={1100} />
              </div>
              <div className="h-full flex justify-center items-center">
                <nav className="flex flex-col items-center gap-12">
                  {navLink.map(({ name, href },index) => (
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5,ease:'linear', delay: index * 0.3 }}
                      href={href}
                      key={name}
                    >
                      <span className="text-4xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300">{name}</span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
