import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  
  const baseStyles = "relative px-8 py-3 text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-500 ease-out disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden bg-transparent";
  
  const widthClass = fullWidth ? "w-full" : "w-auto";

  let innerStyles = '';
  let borderStyles = '';

  if (variant === 'primary') {
    innerStyles = "text-charcoal-950 font-medium z-10 relative";
    borderStyles = "absolute inset-0 bg-gold-500 transition-transform duration-500 group-hover:scale-105";
  } else if (variant === 'secondary') {
    innerStyles = "text-gold-200 z-10 relative font-light group-hover:text-gold-400";
    borderStyles = "absolute inset-0 bg-charcoal-800 border border-charcoal-700 transition-all duration-500 group-hover:border-gold-500/50";
  } else if (variant === 'outline') {
    innerStyles = "text-gold-500 z-10 relative font-light group-hover:text-charcoal-950 transition-colors duration-500";
    borderStyles = "absolute inset-0 border border-gold-500 transition-all duration-500";
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${widthClass} ${className}`}
      {...props}
    >
      <div className={borderStyles} />
      {variant === 'outline' && (
        <div className="absolute inset-0 bg-gold-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      )}
      <div className={innerStyles}>
        {children}
      </div>
    </motion.button>
  );
};