import Image from 'next/image';

interface IPhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function IPhoneFrame({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 639px) 280px, (max-width: 1023px) 45vw, 25vw',
}: IPhoneFrameProps) {
  return (
    <div className={`relative isolate w-full drop-shadow-[0_18px_24px_rgba(55,43,31,0.18)] ${className}`}>
      {/* The 1520 × 3068 frame has a 1320 × 2868 display inset by 100 px. */}
      <div className="absolute overflow-hidden bg-black"
        style={{
          left: `${100 / 1520 * 100}%`,
          top: `${100 / 3068 * 100}%`,
          width: `${1320 / 1520 * 100}%`,
          height: `${2868 / 3068 * 100}%`,
          borderRadius: '15.5% / 7.15%',
        }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority}
          className="object-cover" />
      </div>
      <Image src="/devices/iphone-16-pro-max-natural-titanium.png" alt=""
        width={1520} height={3068} sizes={sizes} priority={priority}
        className="pointer-events-none relative z-10 h-auto w-full select-none"
        aria-hidden="true" />
    </div>
  );
}
