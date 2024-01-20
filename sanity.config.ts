import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./cms/schemas";

export default defineConfig({
  name: "golf-cochem",
  title: "golf cochem",
  projectId: "fsyq4756",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
