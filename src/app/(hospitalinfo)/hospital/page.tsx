import HospitalCatalog from "@/components/HospitalCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { fetchHospitals } from "@/libs/getHospitals";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import AddHospitalForm from "@/components/AddHospitalForm";

export default async function Home() {
  const hospitals = fetchHospitals();

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);

  return (
    <main className="flex flex-col justify-between items-center p-24 pt-0 min-h-screen">
      {/* <CardPanel hospitals={hospitals} /> */}
      <Suspense
        fallback={
          <p>
            Loading... <LinearProgress />{" "}
          </p>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
        {profile.data.role === "admin" && <AddHospitalForm />}
      </Suspense>
    </main>
  );
}
