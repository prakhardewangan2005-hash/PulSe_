export default function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="pulse-logo-grad" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#eaeaea" />
          <stop offset="1" stopColor="#7cc3ff" />
        </linearGradient>
      </defs>
      <circle cx="11" cy="11" r="9.5" stroke="url(#pulse-logo-grad)" strokeWidth="1.4" />
      <circle cx="11" cy="11" r="3" fill="url(#pulse-logo-grad)" />
    </svg>
  );
}
