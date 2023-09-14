import Image from "next/image";
import ResponsiveCard from "./ResponsiveCard";
interface propsType {
  hospitalName: string;
  imgSrc: string;
}

export default function ProductCard(props: propsType) {
  const { hospitalName, imgSrc } = props;
  return (
    <ResponsiveCard>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="hospital"
          fill={true}
          className="object-cover rounded-t-lg"
          style={{ opacity: 0.6 }}
        />
      </div>
      <div className="relative z-20 text-black text-center pt-30">
        <h2>{hospitalName}</h2>
      </div>
    </ResponsiveCard>
  );
}
