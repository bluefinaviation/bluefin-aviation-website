/**
 * This plugin contains all the logic for setting up the `Settings` singleton
 */

import { type DocumentDefinition, definePlugin } from 'sanity';
import { type StructureResolver } from 'sanity/desk';

export const listItem = (S, type) =>
  S.listItem()
    .title(type.title)
    .icon(type.icon)
    .child(
      S.editor().id(type.name).schemaType(type.name).documentId(type.name)
    );

export const singletonPlugin = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: type,
    document: {
      // Hide singleton from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            (templateItem) => templateItem.templateId !== type
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate');
        }

        return prev;
      },
    },
  };
});

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
// like how "Post" and "Author" is handled.
// // export const settingsStructure = (
// //   typeDef: DocumentDefinition
// // ): StructureResolver => {
// //   return (S) => {
// //     // The `Settings` root list item
// //     const settingsListItem = // A singleton not using `documentListItem`, eg no built-in preview
// //       S.listItem()
// //         .title(typeDef.title)
// //         .icon(typeDef.icon)
// //         .child(
// //           S.editor()
// //             .id(typeDef.name)
// //             .schemaType(typeDef.name)
// //             .documentId(typeDef.name)
// //         );

// //     // The default root list items (except custom ones)
// //     const defaultListItems = S.documentTypeListItems().filter(
// //       (listItem) => listItem.getId() !== typeDef.name
// //     );

// //     return S.list()
// //       .title('Content')
// //       .items([settingsListItem, S.divider(), ...defaultListItems]);
// //   };
// // };
