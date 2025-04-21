import { twMerge } from "tailwind-merge"
import TextButton from "../components/TextButton";

const Card = ({colorClass, children, className, Buttontext}) => {
  return (
    <div
      className={twMerge("relative z-0 p-8 md:p-10 group",className)}
    >
      <div
        className={twMerge(
          "absolute size-16 rounded-2xl top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
          colorClass === "fuchsia" && "bg-fuchsia-500",
          colorClass === "lime" && "bg-lime-500",
          colorClass === "cyan" && "bg-cyan-500",
          colorClass === "violet" && "bg-violet-500"
        )}
      ></div>
      <div
        className={twMerge(
          "absolute size-17 rounded-2xl transition duration-300 top-1.5 right-1.5 -z-10",
          colorClass === "fuchsia" &&
            "bg-fuchsia-500 group-hover:bg-fuchsia-400",
          colorClass === "lime" &&
            "bg-lime-500 group-hover:bg-lime-400",
          colorClass === "cyan" &&
            "bg-cyan-500 group-hover:bg-cyan-400",
          colorClass === "violet" &&
            "bg-violet-500 group-hover:bg-violet-400"
        )}
      ></div>
      <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
      <div>{children}</div>
      
      <div className="flex justify-between items-center mt-12">
        <TextButton colorClass={colorClass} children={Buttontext || 'Learn More'} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-8 text-zinc-500 group-hover:text-zinc-400 transition duration-300 -translate-2 group-hover:translate-x-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  )
}

export default Card