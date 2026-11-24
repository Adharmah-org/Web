interface BrandMarkProps {
  className?: string;
  title?: string;
}

export function BrandMark({ className, title }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="64" height="64" rx="14" fill="#141311" />
      <rect
        x="2.5"
        y="2.5"
        width="59"
        height="59"
        rx="11.5"
        fill="none"
        stroke="#C9A45C"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      <rect x="14" y="13" width="36" height="6" rx="3" fill="#C9A45C" />
      <path
        d="M32 25 H40 a7 7 0 0 1 0 14 H32 M32 25 H24 a7 7 0 0 0 0 14 H32"
        fill="none"
        stroke="#EFEAE0"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M32 19 V51" stroke="#EFEAE0" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
