import Headear from "@/components/Header";
import Hero from "@/components/Hero";
import Button from "@/components/‌‌Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 py-14 bg-black">
      <Headear />
      <Hero />
      <Button />
    </main>
  );
}
