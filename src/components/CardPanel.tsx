"use client";
import { useReducer } from "react";
import ProductCard from "./ProductCard";

export default function CardPanel() {
  const ratingReducer = (
    ratingMap: Map<string, number>,
    action: { type: string; hospitalName: string; rating: number }
  ) => {
    switch (action.type) {
      case "add": {
        return new Map(ratingMap.set(action.hospitalName, action.rating));
      }
      case "delete": {
        ratingMap.delete(action.hospitalName);
        return new Map(ratingMap);
      }
      default:
        return ratingMap;
    }
  };

  const [ratingMap, dispatchRating] = useReducer(
    ratingReducer,
    new Map<string, number>()
  );

  const hospitalName = [
    "Chulalongkorn Hospital",
    "Rajavithi Hospital",
    "Thammasat University Hospital",
  ];
  const imagePath = ["/chula.jpg", "/rajavithi.jpg", "/thammasat.jpg"];

  return (
    <div className="flex flex-col justify-center space-x-10 space-y-10 w-full items-center m-10 ">
      <div className="flex flex-row space-x-10">
        {hospitalName.map((hospital, index) => {
          return (
            <ProductCard
              hospitalName={hospital}
              imgSrc={imagePath[index]}
              rating={ratingMap.has(hospital) ? ratingMap.get(hospital)! : 0}
              onRating={(hospitalName: string, rating: number) =>
                dispatchRating({
                  type: "add",
                  hospitalName: hospitalName,
                  rating: rating,
                })
              }
            />
          );
        })}
      </div>
      <div className="flex flex-col">
        {Array.from(ratingMap).map(([hospitalName, rating], index) => {
          return (
            <div
              key={hospitalName}
              onClick={() => {
                dispatchRating({
                  type: "delete",
                  hospitalName: hospitalName,
                  rating: rating,
                });
              }}
            >
              {hospitalName} Rating = {rating}
            </div>
          );
        })}
      </div>
      {/* <ProductCard hospitalName="Chulalongkorn Hospital" imgSrc="/chula.jpg" />
      <ProductCard hospitalName="Rajavithi Hospital" imgSrc="/rajavithi.jpg" />
      <ProductCard
        hospitalName="Thammasat University Hospital"
        imgSrc="/thammasat.jpg"
      /> */}
    </div>
  );
}
