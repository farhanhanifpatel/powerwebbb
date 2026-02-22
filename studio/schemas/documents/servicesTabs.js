export default {
  name: "servicesTabs",
  title: "Services Tabs Section",
  type: "document",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "tabs",
      title: "Tabs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Tab Title",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
  ],
};
