"use client";

import Image from "next/image";

export default function MobileAppQatarSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Accent Line */}
          <div className="inline-block mb-6 px-4 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700">
            Trusted Mobile Experts in Qatar
          </div>
          {/* <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mb-6 rounded-full"></div> */}

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            Mobile App Development Company in Doha Qatar
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              PowerWeb, a leading{" "}
              <strong>mobile app development company in Qatar</strong>, is
              dedicated to turning your ideas into powerful, user-centric mobile
              solutions. As one of the{" "}
              <strong>best mobile app development companies in Qatar</strong>,
              we focus on innovation and quality, delivering tailored apps that
              drive business growth and engage users across all platforms.
            </p>

            <p>
              From concept to deployment, PowerWeb serves as your trusted{" "}
              <strong>mobile app development agency in Qatar</strong>,
              transforming visions into successful mobile experiences that
              resonate with Qatar’s dynamic market. With Qatar’s mobile app
              development market growing at a 5.25% compound annual growth rate
              and expected to reach $114.9 million by 2029, partnering with the
              right development team has never been more crucial.
            </p>
          </div>

          {/* SERVICES LIST */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              "Tailored iOS and Android App Development",
              "Native and Cross-Platform Solutions",
              "Second Platform App Development",
              "UI/UX Design",
              "Consulting and Prototyping",
              "Automated QA and Testing",
              "Power Management, Notification, and Geofencing",
              "Embedded Android & AOSP Customizations",
              "Maintenance and Post-Warranty Support",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-sm shrink-0">
                  ✓
                </div>
                <p className="text-sm font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Soft Glow Background */}
          <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-3xl opacity-10"></div>

          <Image
            src="/payment-information-amico-66210497c2e6c-1024x1024.webp"
            alt="Mobile App Development"
            width={600}
            height={500}
            className="relative w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
