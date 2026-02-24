import { defineType, defineField } from "sanity";
import { MdStar } from "react-icons/md";

export default defineType({
  name: "socialMediaTestimonial",
  title: "Testimonial",
  type: "document",
  icon: MdStar,

  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "feedback",
      title: "Feedback",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower number appears first",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "country",
      rating: "rating",
    },
    prepare({ title, subtitle, rating }) {
      return {
        title: `${title} (${rating}★)`,
        subtitle,
      };
    },
  },
});
