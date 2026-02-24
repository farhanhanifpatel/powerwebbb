import { defineType, defineField } from "sanity";
import { MdWork } from "react-icons/md";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: MdWork,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "link",
      title: "Project Link",
      type: "url",
    }),
  ],
});
