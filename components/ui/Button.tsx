import React from 'react';

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
  
  const baseStyles = "relative px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 ease-out transform disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gold-500 text-charcoal-950 hover:bg-gold-400 hover:-translate-y-0.5 shadow-md shadow-gold-900/20",
    secondary: "bg-charcoal-800 text-gold-200 border border-charcoal-700 hover:border-gold-500/50 hover:text-gold-400",
    outline: "bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-charcoal-950"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};