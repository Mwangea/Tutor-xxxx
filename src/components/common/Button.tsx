import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-full transition-colors font-semibold';
  const variantStyles = {
    primary: 'bg-[#4A9B8C] text-white hover:bg-[#3d8274]',
    secondary: 'bg-white text-[#1F4788] hover:bg-gray-100'
  };
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles}`}
    >
      {children}
    </button>
  );
}