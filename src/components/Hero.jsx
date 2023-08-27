import Image from "next/image";
import Astro from "@/images/astro.webp";

export default function Hero() {
  return (
    <div className="flex w-full ">
      <div className="space-y-5 w-1/2">
        <h1 className="uppercase text-4xl tracking-widest">
          taking humans to space
        </h1>
        <p className="leading-9 tracking-widest text-gray-50">
          Embarking on a monumental voyage, humanity's quest to traverse the
          cosmos has ignited a fervent curiosity. Taking humans to space
          represents the pinnacle of scientific and engineering achievements,
          pushing the boundaries of our knowledge and capabilities. From the
          pioneering days of Yuri Gagarin's historic orbit to the International
          Space Station's continuous habitation.
        </p>
      </div>
      <div className="w-1/2">
        <Image
          sizes="300"
          className="grayscale shadow-inner shadow-black"
          src={Astro}
        />
      </div>
    </div>
  );
}
