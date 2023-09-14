import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 pt-0 min-h-screen">
      <Banner />
      <CardPanel />
    </main>
  );
}
