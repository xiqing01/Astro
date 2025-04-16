import { twMerge } from 'tailwind-merge'

const Circle = ({className, img}) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className={twMerge('bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/30 absolute ', className)}>
        <img src= {`/assets/images/${img}.png`} alt={`${img} 3D image`} className='size-[140px]' />
      </div>
    </div>
  )
}

export default Circle