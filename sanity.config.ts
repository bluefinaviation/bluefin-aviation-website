"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";
import { resolve } from "@/sanity/presentation/resolve";
import { defaultDocumentNode } from "@/sanity/structure/defaultDocumentNode";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure, defaultDocumentNode }),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      resolve,
      previewUrl: {
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    unsplashImageAsset(),
    // // assistWithPresets(),
  ],
  document: {
    newDocumentOptions: (prev) =>
      prev.filter(
        (item) => !["siteSettings", "companyDetails"].includes(item.templateId)
      ),
  },
});
