import React from "react";
import ProductCard from "./ProductCard";

interface Hospital {
  hospitalName: string;
  hospitalId: number;
  imageUrl: string;
}

interface HospitalCatalogProps {
  hospitals: Hospital[];
}

export default async function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: Object;
}) {
  const hospitals = await hospitalJson;

  return (
    <div className="flex flex-col justify-center space-x-10 space-y-10 w-full items-center m-10 ">
      <div className="flex flex-row space-x-10">
        {hospitals.data.map((hospital, index) => {
          return (
            <ProductCard
              key={hospital._id}
              hospitalName={hospital.name}
              imgSrc={hospital.picture}
              hospitalId={hospital._id}
            />
          );
        })}
      </div>
    </div>
  );
}
