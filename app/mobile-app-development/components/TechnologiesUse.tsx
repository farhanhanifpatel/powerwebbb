"use client";
import Image from "next/image";

const techLogos = [
  { src: "/icons8-flutter-250-1-66000b8b219e9.webp" },
  { src: "/icons8-firebase-384-66210141534d4.webp" },
  { src: "/icons8-android-250-66000b8cc5e68.webp" },
  { src: "/icons8-ios-250-66000b8ccd35f.webp" },
  { src: "/icons8-app-store-250-662100edea655.webp" },
  { src: "/icons8-play-store-250-662100ed9bf74.webp" },
];

export default function TechnologiesSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-32 w-[600px] h-[600px]  rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">
            {techLogos.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center group transition duration-300 hover:-translate-y-2"
              >
                <Image
                  src={tech.src}
                  alt={"Technology Logo"}
                  width={100}
                  height={60}
                  className="object-contain 
                    opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
