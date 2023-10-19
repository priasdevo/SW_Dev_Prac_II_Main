import HospitalCatalog from "@/components/HospitalCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { fetchHospitals } from "@/libs/getHospitals";

export default function Home() {
  const hospitals = fetchHospitals();
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
      </Suspense>
    </main>
  );
}
