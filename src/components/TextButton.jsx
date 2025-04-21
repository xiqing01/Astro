import { twMerge } from "tailwind-merge"

const TextButton = ({colorClass, children, className}) => {
  return (
    <button
      className={twMerge(
        "text-sm uppercase font-extrabold tracking-wide",
        colorClass === "fuchsia" && "text-fuchsia-500",
        colorClass === "lime" && "text-lime-500",
        colorClass === "cyan" && "text-cyan-500",
        colorClass === "violet" && "text-violet-500",className
      )}
    >
      {children}
    </button>
  )
}

export default TextButton