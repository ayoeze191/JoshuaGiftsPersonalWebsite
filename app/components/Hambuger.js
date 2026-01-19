export default function Hamburger({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="relative w-6 order-3  md:hidden h-4 flex flex-col justify-between items-center z-50"
      aria-label="Toggle navigation"
    >
      <span
        className={`h-0.5 w-full bg-black transition-all duration-300 ease-in-out
          ${isOpen ? "rotate-45 translate-y-[11px]" : ""}`}
      />
      <span
        className={`h-0.5 w-full bg-black transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`h-0.5 w-full bg-black transition-all duration-300 ease-in-out
          ${isOpen ? "-rotate-45 -translate-y-[11px]" : ""}`}
      />
    </button>
  );
}
