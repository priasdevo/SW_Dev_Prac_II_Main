import CardPanel from "@/components/CardPanel";
import { hospitals } from "@/constants/hospital";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 pt-0 min-h-screen">
      <CardPanel hospitals={hospitals} />
    </main>
  );
}
