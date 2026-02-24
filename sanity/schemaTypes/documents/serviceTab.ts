import { defineType, defineField } from "sanity";
import { MdTab } from "react-icons/md";

export default defineType({
  name: "servicesTabs",
  title: "Services Tabs Section",
  type: "document",
  icon: MdTab,

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
          type: "object",
          name: "tab",
          title: "Tab",
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
