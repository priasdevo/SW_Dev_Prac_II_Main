"use client";
import React from "react";
import { useReducer } from "react";
import ProductCard from "./ProductCard";
import { hospitals } from "@/constants/hospital";
import { useRouter } from "next/navigation";

interface Hospital {
  hospitalName: string;
  hospitalId: number;
  imageUrl: string;
}

interface CardPanelProps {
  hospitals: Hospital[];
}

const CardPanel = (props: CardPanelProps) => {
  const { hospitals } = props;
  const router = useRouter();
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

  return (
    <div className="flex flex-col justify-center space-x-10 space-y-10 w-full items-center m-10 ">
      <div className="flex flex-row space-x-10">
        {hospitals.map((hospital, index) => {
          return (
            <ProductCard
              key={hospital.hospitalId}
              hospitalName={hospital.hospitalName}
              imgSrc={hospital.imageUrl}
              rating={
                ratingMap.has(hospital.hospitalName)
                  ? ratingMap.get(hospital.hospitalName)!
                  : 0
              }
              onRating={(hospitalName: string, rating: number) =>
                dispatchRating({
                  type: "add",
                  hospitalName: hospitalName,
                  rating: rating,
                })
              }
              hospitalId={hospital.hospitalId}
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
    </div>
  );
};

export default CardPanel;
