const Divider = ({className, orientation = 'vertical'}: {className?: string, orientation?: 'vertical' | 'horizontal'}) => (
  <div className={`divider ${className} ${orientation === 'vertical' ? 'w-[1px] h-full' : 'w-full h-[1px]'} bg-stone-300`} />
);

export default Divider;