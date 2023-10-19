import Image from "next/image";
import getHospital from "@/libs/getHospital";

const Home = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  let specificHospital = await getHospital(id);

  // Find the hospital with the specific id
  // const specificHospital = hospitals.find(
  //   (hospital) => hospital.hospitalId === id
  // );

  return (
    <main className="flex flex-col justify-between items-center p-24 pt-0 min-h-screen">
      <div className="flex flex-row justify-center items-start p-24 gap-[20px] ">
        <Image
          src={specificHospital?.data.picture!}
          alt="hospital"
          width={650}
          height={650}
          className="object-cover rounded-t-lg"
        />
        <h1>{specificHospital?.data.name}</h1>
      </div>
      {/* <CardPanel hospitals={[specificHospital!]} /> */}
    </main>
  );
};

export default Home;
