import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="var(--primary)" />
      <path d="M10 20L20 10L30 20L20 30L10 20Z" fill="var(--background)" />
    </svg>
  );
};

export default Logo;
