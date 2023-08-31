import TopMenuText from "./TopMenuText";
import Image from "next/image";

export default function TopMenu() {
  return (
    <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-lightgray flex flex-row-reverse">
      <Image
        src={"/logo.png"}
        className="h-full w-auto"
        alt="logo image"
        width={0}
        height={0}
        sizes="100vh"
      />
      <TopMenuText text="Booking" link="/booking" />
    </div>
  );
}
