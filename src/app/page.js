import Headear from "@/components/Header";
import Hero from "@/components/Hero";
import Button from "@/components/‌‌Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <Headear />
      <Hero />
      <Button />
      <button id="btn2" className="bg-gray-50 px-5 py-2 text-sm text-black">
        Read More
      </button>
    </main>
  );
}
