import { twMerge } from "tailwind-merge";
import Card from "../components/Card";
import { useEffect, useState } from "react";


const cardBgMap = {
  0: "bg-fuchsia-500",
  1: "bg-lime-500",
  2: "bg-cyan-500",
  3: "bg-violet-500",
};


// 在组件外定义
const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revolutionary Blockchain API",
    description:
      "Empower your applications with seamless access to decentralized networks. Simplify complex interactions and scale without limits.",
    colorClass: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Real‑time Transaction Analytics",
    description:
      "Gain actionable insights with live dashboards. Monitor on‑chain activity, detect anomalies, and optimize performance instantly.",
    colorClass: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: "Multi‑chain Identity Management",
    description:
      "Streamline user onboarding across Ethereum, BSC, Polygon and more. Secure KYC, single‑sign‑on and decentralized profiles in one API.",
    colorClass: "cyan",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Smart Contract Orchestration",
    description:
      "Automate complex workflows and cross‑chain calls with simple REST endpoints. Reduce manual overhead and eliminate errors.",
    colorClass: "violet",
  },
];

const FeaturesCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return; // 如果鼠标悬停在卡片上，则不执行自动切换
    const timeout = setTimeout(() => {
      setSelectedCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    },3000)

    return () => clearTimeout(timeout)
  },[selectedCardIndex, isHovered])

  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container mx-auto text-amber-50">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-center max-w-4xl mx-auto">
          Discover the future of blockchain with Blockforge.
        </h2>
        <div className="mt-36 lg:mt-48 flex ">
          <div className="flex flex-none gap-8">
            {cardData.map(
              ({ image, title, description, colorClass }, index) => (
                <div 
                  className="inline-flex flex-none transition-transform duration-500 ease-in-out group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    transform:`translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                  }}
                >
                  <Card key={index} className='max-w-xs md:max-w-md' colorClass={colorClass} >
                    <div className="flex justify-center -mt-28">
                      <div className="inline-flex relative">
                        <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                        <img
                          src={image}
                          alt="Pill image"
                          className="size-40 group-hover:-translate-y-6 transition duration-300"
                        />
                      </div>
                    </div>

                    <h3 className="font-black text-3xl mt-12">{title}</h3>
                    <p className="text-lg text-zinc-400 mt-4">{description}</p>
                </Card>
                </div>
                
              )
            )}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({title}, cardIndex) => (
              <div
                key={title}
                className={twMerge("size-2.5 bg-zinc-500 rounded-full",
                  selectedCardIndex === cardIndex
                    ? cardBgMap[cardIndex] || "bg-zinc-500/30"

                    : "bg-zinc-500/30"
                )}
                onClick={() => setSelectedCardIndex(cardIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
