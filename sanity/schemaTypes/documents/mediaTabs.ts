import { defineType, defineField } from "sanity";
import { MdPermMedia } from "react-icons/md";

export default defineType({
  name: "mediaTabs",
  title: "Media Tabs Section",
  type: "document",
  icon: MdPermMedia,

  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tabs",
      title: "Tabs",
      type: "array",
      of: [
        defineField({
          name: "tab",
          title: "Tab",
          type: "object",

          fields: [
            defineField({
              name: "title",
              title: "Tab Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],

          preview: {
            select: {
              title: "title",
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],

  preview: {
    select: {
      title: "sectionTitle",
    },
  },
});
