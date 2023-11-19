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
      <TopMenuText text="Hospitals" link="/hospital" />
      <div className=" absolute left-0 h-full px-3 flex items-center justify-center">
        {session ? (
          <>
            <Link
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                background: "rgb(254 249 195)",
                padding: "10px",
              }}
              href="/api/auth/signout"
            >
              Sign-Out
            </Link>
            <Link
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                background: "cyan",
                padding: "10px",
              }}
              href="/mybooking"
            >
              My Booking
            </Link>
          </>
        ) : (
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              background: "rgb(254 249 195)",
              padding: "10px",
            }}
            href="/api/auth/signin"
          >
            Sign-In
          </Link>
        )}
      </div>
    </div>
  );
}
