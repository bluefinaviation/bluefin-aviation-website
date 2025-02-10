import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("plane").title("Planes"),
      S.documentTypeListItem("planeCategory").title("Plane Categories"),
      S.documentTypeListItem("planeManufacturer").title("Plane Manufacturers"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["plane", "planeCategory", "planeManufacturer"].includes(
            item.getId()!
          )
      ),
    ]);
