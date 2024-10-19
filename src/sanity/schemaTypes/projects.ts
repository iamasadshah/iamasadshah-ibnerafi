import { defineField } from "sanity";

export const projects = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true, // Allows cropping the image
      },
    }),
    defineField({
      name: "link",
      title: "Project Link",
      type: "url",
    }),
  ],
};
