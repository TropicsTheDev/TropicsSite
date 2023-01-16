import { DocumentDefinition } from "sanity";

const project: DocumentDefinition = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tags",
          type: "string",
        },
      ],
    },
    {
      name: "source",
      title: "Source",
      type: "string",
    },
    {
      name: "visit",
      title: "Visit",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default project;
