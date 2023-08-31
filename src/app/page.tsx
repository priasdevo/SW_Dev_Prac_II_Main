import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 pt-0 min-h-screen">
      <Banner />
      <div className="flex flex-row justify-center space-x-10 w-full items-center m-10 ">
        <ProductCard
          hospitalName="Chulalongkorn Hospital"
          imgSrc="/chula.jpg"
        />
        <ProductCard
          hospitalName="Rajavithi Hospital"
          imgSrc="/rajavithi.jpg"
        />
        <ProductCard
          hospitalName="Thammasat University Hospital"
          imgSrc="/thammasat.jpg"
        />
      </div>
    </main>
  );
}
