import Link from "next/link";
import ConnectButton from "../ConnectButton";
import NavBar from "./NavBar";

const TopBar = () => {
  return (
    <div className="fixed bg-purple-400 backdrop-filter backdrop-blur-lg  bg-opacity-30 border-b border-gray-200 top-0 w-full">
      <div className="relative flex w-full items-center px-4  py-4 shadow">
        <Link href="/">
          <p className="text-lg font-bold">Nft marketplace</p>
        </Link>
        <NavBar />
        <div className="flex-grow"></div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default TopBar;
