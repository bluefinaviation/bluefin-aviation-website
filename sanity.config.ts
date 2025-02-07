"use client";

import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import { resolve } from "@/sanity/presentation/resolve";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    unsplashImageAsset(),
    presentationTool({
      resolve,
      previewUrl: {
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
  document: {
    newDocumentOptions: (prev) =>
      prev.filter(
        (item) => !["siteSettings", "homePage"].includes(item.templateId)
      ),
  },
});
