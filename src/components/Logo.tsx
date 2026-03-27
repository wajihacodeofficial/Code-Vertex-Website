import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 45, className = '' }) => {
  return (
    <img
      src="/logo.jpeg"
      alt="Code Vertex Logo"
      width={size}
      height={size}
      className={className}
      style={{
        filter: 'drop-shadow(0 0 15px rgba(255, 195, 0, 0.2))',
      }}
    />
  );
};

export default Logo;
