export default function MobileNav({ isOpen }) {
  return (
    <nav
      className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <ul className="p-6 space-y-6 text-lg">
        <li className="cursor-pointer text-[#333] hover:text-blue-500">Home</li>
        <li className="cursor-pointer text-[#333] hover:text-blue-500">
          About
        </li>
        <li className="cursor-pointer text-[#333] hover:text-blue-500">
          Books
        </li>
        <li className="cursor-pointer text-[#333] hover:text-blue-500">
          Contact
        </li>
      </ul>
    </nav>
  );
}
