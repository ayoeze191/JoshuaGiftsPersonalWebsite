import Image from "next/image";
import Main from "./components/Main.js";
import OutNow from "./components/OutNow.js";
import Header from "./components/Header.js";
import Author from "./components/Author.js";
export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b py-10 from-white to-blue-50 overflow-scroll">
      {/* <div className="w-20 mx-auto bg-blue-200 rounded-[40px] h-[15px] py-1 px-1">
        <div className="bg-blue-700 rounded-full w-2 h-full"></div>
      </div> */}
      <Header />
      <OutNow />
      <Author />
      {/* <Main /> */}
    </div>
  );
}
