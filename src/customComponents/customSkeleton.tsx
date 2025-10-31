const Skeleton: React.FC<{ 
  width?: string; 
  height?: string; 
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  delay?: number;
}> = ({ width = '100%', height = '16px', className = '', variant = 'rounded', delay = 0 }) => {
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg',
  };

  return (
    <div
      className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 ${variantClasses[variant]} ${className} relative overflow-hidden animate-gradient`}
      style={{ 
        width, 
        height,
        animationDelay: `${delay}ms`,
        backgroundSize: '200% 100%'
      }}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/80 to-transparent" 
           style={{ animationDelay: `${delay}ms` }} />
      <div className="absolute inset-0 animate-pulse-glow bg-gradient-to-r from-transparent via-cyan-100/30 to-transparent" 
           style={{ animationDelay: `${delay + 500}ms` }} />
    </div>
  );
};

export default Skeleton