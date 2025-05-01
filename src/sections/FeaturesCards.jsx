import { twMerge } from "tailwind-merge";
import Card from "../components/Card";
import { useState, useRef, useLayoutEffect, useEffect } from "react";

const cardBgMap = {
  0: "bg-fuchsia-500",
  1: "bg-lime-500",
  2: "bg-cyan-500",
  3: "bg-violet-500",
};

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
  // 当前选中索引
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  // 是否悬停，影响自动播放
  const [isHovered, setIsHovered] = useState(false);
  // 容器宽度
  const [containerWidth, setContainerWidth] = useState(0);
  // 响应式可见滑块数量
  const [slidesPerView, setSlidesPerView] = useState(1);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  // 拖拽状态
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    currentX: 0,
  });

  // 监听容器宽度与断点
  useLayoutEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.getBoundingClientRect().width;
      setContainerWidth(width);
      // 断点设置 slidesPerView
      if (width < 640) setSlidesPerView(1.2);
      else if (width < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 自动轮播
  useEffect(() => {
    if (isHovered || dragState.current.isDragging) return;
    const timer = setTimeout(() => {
      setSelectedCardIndex(
        (prev) => (prev + 1) % cardData.length
      );
    }, 3000);
    return () => clearTimeout(timer);
  }, [selectedCardIndex, isHovered]);

  // 参数常量
  const gap = 32;
  const parallaxFactor = 0.3;
  const scaleFactor = 0.15;

  // 计算 slide 宽度
  const slideWidth =
    containerWidth > 0
      ? (containerWidth - gap * (slidesPerView - 1)) / slidesPerView
      : 0;
  // 计算轨道基础偏移（让选中项居中）
  const trackOffset =
    -selectedCardIndex * (slideWidth + gap) +
    (containerWidth - slideWidth) / 2;

  // 设置轨道 transform
  const setTrackTransform = (offsetX, useTransition = true) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition =
      useTransition ? "transform 0.5s ease-out" : "none";
    trackRef.current.style.transform =
      `translateX(${offsetX}px)`;
  };

  // 同步选中索引变动到轨道位置
  useEffect(() => {
    setTrackTransform(trackOffset);
  }, [trackOffset]);

  // 拖拽开始
  const handleDragStart = (e) => {
    e.preventDefault();
    dragState.current.isDragging = true;
    setIsHovered(true);
    dragState.current.startX =
      e.type === "touchstart"
        ? e.touches[0].clientX
        : e.clientX;
    dragState.current.currentX = 0;
    setTrackTransform(trackOffset, false);
    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDragMove, { passive: false });
    document.addEventListener("touchend", handleDragEnd);
  };

  // 拖拽移动
  const handleDragMove = (e) => {
    if (!dragState.current.isDragging) return;
    const clientX =
      e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - dragState.current.startX;
    dragState.current.currentX = deltaX;
    setTrackTransform(trackOffset + deltaX, false);
    e.preventDefault();
  };

  // 拖拽结束
  const handleDragEnd = () => {
    dragState.current.isDragging = false;
    setIsHovered(false);
    const threshold = slideWidth / 3;
    if (
      dragState.current.currentX > threshold &&
      selectedCardIndex > 0
    ) {
      setSelectedCardIndex((prev) => prev - 1);
    } else if (
      dragState.current.currentX < -threshold &&
      selectedCardIndex < cardData.length - 1
    ) {
      setSelectedCardIndex((prev) => prev + 1);
    } else {
      setTrackTransform(trackOffset);
    }
    dragState.current.currentX = 0;
    document.removeEventListener("mousemove", handleDragMove);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchmove", handleDragMove);
    document.removeEventListener("touchend", handleDragEnd);
  };

  return (
    <section className="py-24 overflow-hidden md:-mt-28">
      <div ref={containerRef} className="container mx-auto text-amber-50">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-center max-w-4xl mx-auto">
          Discover the future of blockchain with Blockforge.
        </h2>
        <div className="mt-36 lg:mt-48 relative">
          <div
            ref={trackRef}
            className="flex cursor-grab select-none"
            style={{ gap: `${gap}px` }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {cardData.map((card, index) => {
              // 与选中卡片的距离
              const offset = index - selectedCardIndex;
              const parallax = offset * parallaxFactor * slideWidth;
              const scale =
                1 + (1 - Math.min(Math.abs(offset), 1)) * scaleFactor;
              return (
                <div
                  key={card.title}
                  className="flex-none"
                  style={{
                    width: `${slideWidth}px`,
                    transform: `translateX(${parallax}px) scale(${scale})`,
                    transition: "transform 0.5s ease-out",
                  }}
                >
                  <Card className="h-full" colorClass={card.colorClass}>
                    <div className="flex justify-center -mt-28">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="size-40 group-hover:-translate-y-6 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-black text-3xl mt-12">{card.title}</h3>
                    <p className="text-lg text-zinc-400 mt-4">
                      {card.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }, idx) => (
              <div
                key={title}
                className={twMerge(
                  "size-2.5 rounded-full transition-colors duration-300",
                  selectedCardIndex === idx
                    ? cardBgMap[idx]
                    : "bg-zinc-500/30"
                )}
                onClick={() => setSelectedCardIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
