import {
  Airplane,
  Factory,
  SealPercent,
  Tag,
  UserCircle,
  Keyboard,
  CallBell,
  IdentificationCard,
  PencilCircle,
  SealQuestion
} from '@phosphor-icons/react/dist/ssr'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = S =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .id('companyDetails')
        .schemaType('companyDetails')
        .title('Company Details')
        .child(
          S.editor()
            .id('companyDetails')
            .schemaType('companyDetails')
            .documentId('companyDetails')
        ),
      S.divider(),
      S.documentTypeListItem('plane').title('Planes').icon(Airplane),
      S.documentTypeListItem('planeCategory')
        .title('Plane Categories')
        .icon(Tag),
      S.documentTypeListItem('planeManufacturer')
        .title('Plane Manufacturers')
        .icon(Factory),
      S.documentTypeListItem('emptyLeg').title('Empty Legs').icon(SealPercent),
      S.divider(),
      S.documentTypeListItem('service').title('Services').icon(CallBell),
      S.documentTypeListItem('faq').title('FAQs').icon(SealQuestion),
      S.documentTypeListItem('testimonial')
        .title('Testimonials')
        .icon(IdentificationCard),
      S.divider(),
      S.documentTypeListItem('article').title('News').icon(PencilCircle),
      S.documentTypeListItem('author').title('Authors').icon(UserCircle),
      S.documentTypeListItem('category').title('Category').icon(Keyboard),
      S.divider(),
      ...S.documentTypeListItems().filter(
        item =>
          item.getId() &&
          ![
            'plane',
            'planeCategory',
            'planeManufacturer',
            'emptyLeg',
            'companyDetails',
            'article',
            'author',
            'category',
            'service',
            'faq',
            'testimonial'
          ].includes(item.getId()!)
      )
    ])
