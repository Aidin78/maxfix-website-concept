import Image from 'next/image';
import logo from '~/assets/images/logo.png';

interface LogoProps {
  height?: number;
  className?: string;
  preload?: boolean;
}

export default function Logo({ height = 44, className, preload = false }: LogoProps) {
  const width = Math.round((logo.width / logo.height) * height);
  return (
    <Image
      src={logo}
      alt="MaxFix – fixar dina hemmafix"
      width={width}
      height={height}
      preload={preload}
      className={className}
      style={{ display: 'block', width, height }}
    />
  );
}
