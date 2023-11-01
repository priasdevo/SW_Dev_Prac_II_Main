import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

import BookingForm from "@/components/BookingForm";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  let createdAt = new Date(profile.data.createdAt);

  return (
    <main className="flex flex-col justify-content items-center p-24 pt-0 min-h-screen">
      <div className="bg-white rounded-xl w-fit flex flex-col shadow-xl p-4 m-5">
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <p>Name : </p>
          <p className="font-bold">{profile.data.name}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <p>Email : </p>
          <p className="font-bold">{profile.data.email}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <p>Tel. : </p>
          <p className="font-bold">{profile.data.tel}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <p>Member Since : </p>
          <p className="font-bold">{createdAt.toLocaleDateString()}</p>
        </div>
      </div>
      <BookingForm />
    </main>
  );
}
