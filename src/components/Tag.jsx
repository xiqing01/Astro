import { twMerge } from "tailwind-merge"

export const Tag = ({children, colorClass, className}) => {
  return (
    <div className={twMerge("px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider   inline-flex rounded-full",
      colorClass === "fuchsia" && "bg-fuchsia-500/15 text-fuchsia-500",
      colorClass === "lime" && "bg-lime-500/15 text-lime-500",
      colorClass === "cyan" && "bg-cyan-500/15 text-cyan-500",
      colorClass === "violet" && "bg-violet-500/15 text-violet-500",
      className
    )}>
      {children}
    </div>
  )
}
