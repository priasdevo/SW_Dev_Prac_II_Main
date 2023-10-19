import TopMenuText from "./TopMenuText";
import Image from "next/image";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
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
      {session ? (
        <Link href="/api/auth/signout">
          <div className=" absolute left-0 h-full px-3 flex items-center justify-center bg-yellow-100">
            Sign-Out
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/signin">
          <div className=" absolute left-0 h-full px-3 flex items-center justify-center bg-yellow-100">
            Sign-In
          </div>
        </Link>
      )}
    </div>
  );
}
