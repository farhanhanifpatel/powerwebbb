// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { FaHeadset, FaMedal, FaGlobe, FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Services from "./ServicesSection";
// import TechAndClients from "./TechClient";
// import Faq from "./Faq";
// import ProcessSection from "./ProcessSection";
// import CTA from "./CTA";

// type HeroProps = {
//   title: string;
//   buttonText: string;
//   buttonLink: string;
//   theme?: "light" | "dark";
// };

// export default function Hero({
//   title,
//   buttonText,
//   buttonLink,
//   theme = "light",
// }: HeroProps) {
//   const isDark = theme === "dark";

//   return (
//     <main>
//       <section
//         className="relative h-[90vh] overflow-x-hidden
//  flex items-center justify-center text-center overflow-hidden bg-[#0b0b0f] text-white"
//       >
//         {/* 🔥 Animated Gradient Blobs */}
//         <motion.div
//           animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
//           transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-600/40 blur-[160px] rounded-full"
//         />

//         <motion.div
//           animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
//           transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/40 blur-[160px] rounded-full"
//         />

//         <motion.div
//           animate={{ y: [0, 50, 0] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-fuchsia-600/30 blur-[150px] rounded-full"
//         />

//         {/* Subtle Grid Overlay */}
//         <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="relative z-10 max-w-4xl px-6"
//         >
//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 1 }}
//             className="text-4xl md:text-6xl font-extrabold leading-tight"
//           >
//             {title}
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 1 }}
//             className="mt-6 text-gray-400 max-w-2xl mx-auto"
//           >
//             We deliver high-performance IT solutions that help businesses grow,
//             scale and stay secure in the digital world.
//           </motion.p>

//           {/* Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2, duration: 1 }}
//             className="mt-10 flex justify-center"
//           >
//             <Link href={buttonLink}>
//               <button
//                 className="px-10 py-4 rounded-xl font-semibold text-white
//           bg-gradient-to-r from-purple-600 to-indigo-600
//           hover:scale-105 hover:shadow-2xl transition"
//               >
//                 {buttonText}
//               </button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* 🔹 FEATURES */}
//       <section className="bg-white py-24">
//         <div className="max-w-6xl mx-auto px-6">
//           {/* FEATURES GRID */}
//           <div className="grid md:grid-cols-3 gap-8 text-center">
//             {[
//               {
//                 icon: <FaGlobe />,
//                 title: "Qatar-Based Expertise",
//                 desc: "Local professionals who deeply understand the Qatar market and business culture.",
//               },
//               {
//                 icon: <FaHeadset />,
//                 title: "24/7 IT Support",
//                 desc: "Our experts are available around the clock to keep your systems running smoothly.",
//               },
//               {
//                 icon: <FaMedal />,
//                 title: "Proven Track Record",
//                 desc: "Delivering successful IT solutions for startups, SMEs, and enterprises.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className="group p-8 rounded-xl border hover:border-purple-600 hover:shadow-xl transition-all"
//               >
//                 <div className="bg-gradient-to-r from-purple-600 to-indigo-600 w-14 h-14 flex items-center justify-center mx-auto rounded-lg mb-4 group-hover:scale-110 transition text-white text-2xl">
//                   {item.icon}
//                 </div>

//                 <h4 className="font-semibold text-lg mb-2 text-purple-700">
//                   {item.title}
//                 </h4>

//                 <p className="text-gray-500 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           {/* DIVIDER */}
//           <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent my-16" />

//           {/* STORY */}
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Image
//                 src="/powerweb-story.webp"
//                 alt="office"
//                 width={450}
//                 height={450}
//                 className="mx-auto rounded-xl object-cover"
//               />
//             </motion.div>

//             {/* Text */}
//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <p className="text-purple-600 text-sm font-semibold mb-2">
//                 OUR STORY
//               </p>

//               <h2 className="text-3xl font-bold mb-6 leading-snug bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
//                 One Of The Best IT Companies in Qatar
//               </h2>

//               <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-600 shadow-sm">
//                 <p className="text-gray-500 leading-relaxed text-[15px]">
//                   PowerWeb started with a simple mission:
//                   <span>
//                     {" "}
//                     to help businesses in Doha thrive through reliable
//                     technology solutions. What began as a small team of
//                     passionate professionals has grown into a trusted partner
//                     serving over 100 businesses across diverse industries.
//                   </span>
//                   <br />
//                   <br />
//                   We noticed companies were struggling to find a single,
//                   dependable partner who could handle everything from websites
//                   to ongoing technical support. They were juggling multiple
//                   vendors and dealing with inconsistent quality. We knew there
//                   had to be a better way.
//                   <br />
//                   <br />
//                   Today, we’re a comprehensive technology partner offering it
//                   consultancy in Qatar. Our certified experts work around the
//                   clock to ensure your technology runs smoothly, so you can
//                   focus on growing your business.
//                   <br />
//                   <br />
//                   Located at Qatar Science & Technology Park, we understand the
//                   unique challenges and opportunities of the local market. From
//                   startups to established enterprises, we’ve been there every
//                   step of the way.
//                 </p>
//               </div>
//               <div className="flex gap-8 items-center mt-6">
//                 <Image
//                   src="/PowerWeb-Reviews.webp"
//                   alt="google"
//                   width={100}
//                   height={30}
//                 />
//                 <Image
//                   src="/Trust-Pilot-Reviews-PowerWeb.webp"
//                   alt="trustpilot"
//                   width={120}
//                   height={30}
//                 />
//               </div>
//             </motion.div>
//           </div>

//           {/* WHY US */}
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             {/* LEFT */}
//             <motion.div
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               {/* Soft glow */}
//               {/* <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 blur-3xl opacity-30 rounded-full" /> */}

//               <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-purple-600 shadow-lg">
//                 <p className="text-purple-600 text-sm font-semibold mb-2 tracking-widest">
//                   WHY CHOOSE US
//                 </p>

//                 <h2 className="text-4xl font-bold mb-8 leading-tight">
//                   Your Trusted IT Company in{" "}
//                   <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
//                     Doha
//                   </span>
//                 </h2>

//                 <div className="bg-gray-50 p-3 rounded-xl ">
//                   <p className="text-gray-500 leading-relaxed text-[15px]">
//                     When your business needs reliable technology support,
//                     choosing the right partner matters. PowerWeb combines local
//                     expertise with international standards to deliver IT
//                     solutions that actually work. We understand the unique
//                     challenges of the Qatari market and provide personalized
//                     service that larger companies can’t match.
//                     <br />
//                     <br />
//                     Our team doesn’t just fix problems—we prevent them. With
//                     proactive monitoring, strategic planning, and hands-on
//                     support, we ensure your technology drives growth rather than
//                     holding you back. From day one, you’ll work with dedicated
//                     professionals who treat your success as their own.
//                   </p>
//                 </div>

//                 {/* Glass Card */}
//                 <div className="backdrop-blur-xl bg-white/70 border border-gray-200 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition">
//                   <ul className="space-y-6">
//                     {[
//                       "Transparent Pricing",
//                       "Fast Response Times",
//                       "Scalable Solutions",
//                       "Enterprise-grade Security",
//                     ].map((item, i) => (
//                       <motion.li
//                         key={i}
//                         initial={{ opacity: 0, x: -30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: i * 0.2 }}
//                         viewport={{ once: true }}
//                         className="flex items-center gap-4 text-gray-700 font-medium group"
//                       >
//                         <FaCheckCircle className="text-purple-600 w-6 h-6 group-hover:scale-110 transition" />
//                         {item}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>

//             {/* RIGHT */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.9 }}
//               viewport={{ once: true }}
//               className="relative flex justify-center"
//             >
//               {/* Floating effect */}
//               <motion.div
//                 animate={{ y: [0, -18, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <Image
//                   src="/powerweb.webp"
//                   alt="powerweb"
//                   width={680}
//                   height={680}
//                   className="drop-shadow-2xl"
//                 />
//               </motion.div>

//               {/* Premium glow ring */}
//               <div className="absolute w-[520px] h-[520px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-20 -z-10" />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       <Services />
//       <TechAndClients />
// <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden mt-8 mb-4">
//   {/* Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center scale-105"
//     style={{ backgroundImage: "url('/your-bg-image.jpg')" }}
//   />

//   {/* Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />

//   {/* Glow accents */}
//   <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 blur-3xl rounded-full animate-pulse" />
//   <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-600/30 blur-3xl rounded-full animate-pulse" />

//   <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//     <div className="grid md:grid-cols-2 gap-12 items-center">
//       {/* LEFT */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//           Real Results for Real Businesses
//         </h1>

//         <p className="text-gray-300 max-w-xl mb-8 text-lg">
//           See how we’ve helped companies across Qatar transform their
//           technology and achieve their goals with our IT services in
//           Qatar.
//         </p>

//         <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium hover:scale-105 transition shadow-2xl">
//           View Our Work
//         </button>

//         {/* CONTACT BAR */}
//         <div className="flex flex-wrap gap-8 mt-14 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-xl">
//           <div className="flex items-center gap-4">
//             <div className="bg-white/20 p-3 rounded-full text-xl">🕒</div>
//             <div>
//               <p className="text-gray-300 text-sm">
//                 Saturday to Thursday
//               </p>
//               <p className="font-semibold">9:00 AM to 5:00 PM</p>
//             </div>
//           </div>

//           <div className="w-px bg-white/20 hidden md:block" />

//           <div className="flex items-center gap-4">
//             <div className="bg-white/20 p-3 rounded-full text-xl">📞</div>
//             <div>
//               <p className="text-gray-300 text-sm">
//                 Call to ask a question
//               </p>
//               <p className="font-semibold">+974 5018 4018</p>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* RIGHT STATS */}
//       <div className="space-y-8">
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl hover:bg-white/20 transition shadow-xl"
//         >
//           <h2 className="text-5xl font-bold mb-2 text-purple-400">7+</h2>
//           <h3 className="text-xl font-semibold mb-2">
//             Years in the business
//           </h3>
//           <p className="text-gray-300">
//             Years of Experience as one of the leading IT companies in
//             Doha.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl hover:bg-white/20 transition shadow-xl"
//         >
//           <h2 className="text-5xl font-bold pt-2 mb-2 text-indigo-400">
//             100+
//           </h2>
//           <h3 className="text-xl font-semibold mb-2">
//             Projects Completed
//           </h3>
//           <p className="text-gray-300">
//             Completed Successfully delivered across diverse industries in
//             Qatar.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   </div>
// </section>

//       <Faq />
//       <ProcessSection />
//       <CTA />
//     </main>
//   );
// }

"use client";

type HeroProps = {
  title: string;
  buttonText: string;
  buttonLink: string;
  theme?: "light" | "dark";
};

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection({
  title,
  buttonText,
  buttonLink,
  theme = "light",
}: HeroProps) {
  return (
    <section
      className="relative h-[90vh] overflow-x-hidden
 flex items-center justify-center text-center overflow-hidden bg-[#0b0b0f] text-white"
    >
      {/* 🔥 Animated Gradient Blobs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-600/40 blur-[160px] rounded-full"
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/40 blur-[160px] rounded-full"
      />

      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-fuchsia-600/30 blur-[150px] rounded-full"
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-4xl px-6"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          We deliver high-performance IT solutions that help businesses grow,
          scale and stay secure in the digital world.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 flex justify-center"
        >
          <Link href={buttonLink}>
            <button
              className="px-10 py-4 rounded-xl font-semibold text-white
          bg-gradient-to-r from-purple-600 to-indigo-600
          hover:scale-105 hover:shadow-2xl transition"
            >
              {buttonText}
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
