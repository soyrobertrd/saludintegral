interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 40, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Leaf Shape (Primary Color: #60B252) */}
        <path 
          d="M50 5C50 5 15 35 15 65C15 85 30 95 50 95C70 95 85 85 85 65C85 35 50 5 50 5Z" 
          fill="#60B252" 
          fillOpacity="0.1"
        />
        <path 
          d="M50 5C30 25 15 45 15 65C15 85 30 95 50 95" 
          stroke="#60B252" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        <path 
          d="M50 5C70 25 85 45 85 65C85 85 70 95 50 95" 
          stroke="#60B252" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        {/* Abstract Inner Leaf/Stroke */}
        <path 
          d="M50 95C50 95 40 75 50 55" 
          className="stroke-primary"
          strokeWidth="4" 
          strokeLinecap="round" 
          opacity="0.6"
        />
        {/* MEDICAL CROSS ICON: Using your PRIMARY green */}
        <path d="M45 35H55V45H65V55H55V65H45V55H35V45H45V35Z" className="fill-primary" />
      </svg>
      {showText && (
        <div className="font-headline font-black tracking-tighter text-on-surface leading-none">
          Salud<span className="text-primary italic">Integral</span>
        </div>
      )}
    </div>
  );
}
