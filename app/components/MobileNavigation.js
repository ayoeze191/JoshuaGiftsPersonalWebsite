export default function MobileNav({ isOpen }) {
  return (
    <nav
      className={`fixed md:hidden top-0 right-0 h-screen w-64 bg-white shadow-lg
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <ul className="p-6 space-y-6 text-lg">
        <li className="cursor-pointer text-[#333] hover:text-blue-500">Home</li>
        <li className="cursor-pointer text-[#333] hover:text-blue-500">Book</li>
        <li className="cursor-pointer text-[#333] hover:text-blue-500">
          Author
        </li>
        <li className="cursor-pointer text-[#333] hover:text-blue-500">
          Sponsorship
        </li>
        <button className=" w-full text-[#333] hover:text-blue-500 bg-blue-500  cursor-pointer hover:bg-white hover:shadow rounded-lg  p-2">
          Contact
        </button>
      </ul>
    </nav>
  );
}
