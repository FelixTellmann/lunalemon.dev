import { ShopifySection } from "types/shopify";

export const hero: ShopifySection = {
  name: "Hero",
  settings: [
    {
      type: "header",
      content: "Header",
    },
    {
      type: "text",
      id: "pre_title",
      label: "Pre header",
    },
    {
      type: "text",
      id: "title",
      label: "Title",
    },
    {
      type: "richtext",
      id: "paragraph",
      label: "Paragraph",
    },
    {
      type: "header",
      content: "List Points",
    },
    {
      type: "text",
      id: "list_title",
      label: "Title",
    },
    {
      type: "richtext",
      id: "list",
      label: "List items",
    },
    {
      type: "header",
      content: "Image",
    },
    {
      type: "image_picker",
      id: "image",
      label: "Image",
    },
  ],
  presets: [
    {
      name: "Hero",
    },
  ],
};
