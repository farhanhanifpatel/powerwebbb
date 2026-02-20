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
  imageUrl: string | any;
  _id: string;
  title: string;
  image: SanityImageSource;
  link?: string;
}

/* ---------------- FETCH ---------------- */

async function getProjects(): Promise<Project[]> {
  return await client.fetch(`
    *[_type == "project" && defined(image.asset)]{
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
    <section className="py-28 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Some Of Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
              Past Work
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project._id}>
              <Link href={project.link || "#"} target="_blank">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={500}
                    height={400}
                    unoptimized
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      View Project
                    </span>
                  </div>
                </div>
              </Link>

              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
