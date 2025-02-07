import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .id("siteSettings")
        .schemaType("siteSettings")
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      S.documentTypeListItem("plane").title("Planes"),
      S.documentTypeListItem("planeCategory").title("Plane Categories"),
      S.documentTypeListItem("planeManufacturer").title("Plane Manufacturers"),
      S.documentTypeListItem("emptyLeg").title("Empty Legs"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "plane",
            "siteSettings",
            "planeCategory",
            "planeManufacturer",
            "emptyLeg",
          ].includes(item.getId()!)
      ),
    ]);
