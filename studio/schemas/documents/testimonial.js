export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "country",
      title: "Country",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "feedback",
      title: "Feedback",
      type: "text",
      validation: Rule => Rule.required()
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: Rule => Rule.required().min(1).max(5).integer(),
      initialValue: 5
    },
    {
      name: "order",
      title: "Order",
      type: "number"
    }
  ]
};