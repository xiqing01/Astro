import { useScroll } from "motion/react";
import Circle from "../components/Circle"
import CutCornerButton from "../components/CutCornerButton"
import Hexagon from "../components/Hexagon"


const CallToAction = () => {




  return (
    <section className="text-amber-50 py-60 overflow-hidden" >
      <div className="container mx-auto">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
            <Hexagon size={1100} reverse duration={50} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className={"absolute size-[200px] left-3 -top-[390px]"} img={'cuboid'} animate={true} minRotate={90}  />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className={"absolute size-[200px] -left-[600px] -top-[70px]"} img={'cylinder'} animate={true} />
          </div>
          
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to <span className="block">build the future?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto">
            Empower your next idea with cutting-edge blockchain solutions from
            Blockforge.
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton children={"Start Building"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
