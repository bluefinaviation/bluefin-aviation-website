import {
  Airplane,
  AirplaneInFlight,
  AirplaneTilt,
  Factory,
} from "@phosphor-icons/react/dist/ssr";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .id("companyDetails")
        .schemaType("companyDetails")
        .title("Company Details")
        .child(
          S.editor()
            .id("companyDetails")
            .schemaType("companyDetails")
            .documentId("companyDetails")
        ),
      S.divider(),
      S.documentTypeListItem("plane").title("Planes").icon(Airplane),
      S.documentTypeListItem("planeCategory")
        .title("Plane Categories")
        .icon(AirplaneTilt),
      S.documentTypeListItem("planeManufacturer")
        .title("Plane Manufacturers")
        .icon(Factory),
      S.documentTypeListItem("emptyLeg")
        .title("Empty Legs")
        .icon(AirplaneInFlight),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "plane",
            "planeCategory",
            "planeManufacturer",
            "emptyLeg",
            "companyDetails",
          ].includes(item.getId()!)
      ),
    ]);
