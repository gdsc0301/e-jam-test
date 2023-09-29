const Number = ({number, decimals = 0, currency = 'USD', className, ariaLabel}: {number: number, decimals?: number, currency?: string | undefined, className?: string, ariaLabel?: string}) => (
  <span className={`number ${className}`} aria-label={ariaLabel}>{number.toLocaleString('en', {style: 'currency', currency: currency, maximumFractionDigits: decimals})}</span>
);
export default Number;