import { DocumentDefinition } from "sanity";

const skill: DocumentDefinition = {
  name: "skills",
  title: "Skill",
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
      type: "string",
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }
  ],
};

export default skill;