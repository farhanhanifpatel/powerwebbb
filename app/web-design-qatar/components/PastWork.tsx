import { client } from "../../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder, { SanityImageSource } from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/* ---------------- TYPES ---------------- */

interface Project {
  _id: string;
  title: string;
  imageUrl: string;
  link?: string;
}

/* ---------------- FETCH ---------------- */

async function getProjects(): Promise<Project[]> {
  return await client.fetch(`
    *[_type == "project" && defined(image.asset)] | order(_createdAt desc){
      _id,
      title,
      link,
      "imageUrl": image.asset->url
    }
  `);
}

/* ---------------- COMPONENT ---------------- */

export default async function PastWork() {
  const projects = await getProjects();

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-slate-50 dark:from-neutral-950 dark:to-neutral-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Some Of Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
              Past Work
            </span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse into the innovative solutions and digital experiences
            we’ve delivered for our clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project._id} className="group relative">
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl "></div>

              <Link href={project.link || "#"} target="_blank">
                <div className="relative overflow-hidden rounded-3xl shadow-xl cursor-pointer bg-white dark:bg-neutral-800">
                  {/* Image */}
                  <div className="overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={450}
                      unoptimized
                      className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                    <span className="text-white text-lg font-semibold tracking-wide">
                      View Project →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Title */}
              <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-snug">
                <span className="block">{project.title}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
