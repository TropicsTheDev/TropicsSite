import { DocumentDefinition } from "sanity";

const timelineData: DocumentDefinition = {
  name: "timelineData",
  title: "Timeline Data",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "number",
      validation(rule) {
        return rule.required().integer();
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    }
  ],
};

export default timelineData;
