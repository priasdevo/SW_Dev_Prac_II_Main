"use client";

import CardPanel from "@/components/CardPanel";
import { hospitals } from "@/constants/hospital";
import { useParams } from "next/navigation";
import Image from "next/image";

const Home = () => {
  const params = useParams();
  const id = parseInt(params["id"] as string);

  // Find the hospital with the specific id
  const specificHospital = hospitals.find(
    (hospital) => hospital.hospitalId === id
  );

  return (
    <main className="flex flex-col justify-between items-center p-24 pt-0 min-h-screen">
      <div className="flex flex-row justify-center items-start p-24 gap-[20px] ">
        <Image
          src={specificHospital?.imageUrl!}
          alt="hospital"
          width={650}
          height={650}
          className="object-cover rounded-t-lg"
        />
        <h1>{specificHospital?.hospitalName}</h1>
      </div>
      {/* <CardPanel hospitals={[specificHospital!]} /> */}
    </main>
  );
};

export default Home;
