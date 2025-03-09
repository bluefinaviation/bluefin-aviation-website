import { defineField, defineType } from 'sanity'
import { SealPercent } from '@phosphor-icons/react/dist/ssr'

export const emptyLegType = defineType({
  name: 'emptyLeg',
  title: 'Empty Legs',
  type: 'document',
  icon: SealPercent,
  fields: [
    defineField({
      name: 'origin',
      title: 'Origin',
      type: 'flight',
      description: 'Origin of the empty leg'
    }),
    defineField({
      name: 'departureTime',
      title: 'Departure Time',
      type: 'datetime',
      description: 'Departure time'
    }),
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'flight',
      description: 'Destination of the empty leg'
    }),
    defineField({
      name: 'arrivalTime',
      title: 'Arrival Time',
      type: 'datetime',
      description: 'Arrival time'
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price for the full plane'
    }),
    defineField({
      name: 'plane',
      title: 'Plane',
      type: 'reference',
      to: [{ type: 'plane' }],
      description: 'Plane used for the empty leg'
    })
  ],
  preview: {
    select: {
      origin: 'origin.city',
      destination: 'destination.city',
      price: 'price',
      departureTime: 'departureTime'
    },
    prepare: selection => {
      const { origin, destination, price } = selection
      return {
        title: `${origin} - ${destination}`,
        subtitle: `$${price}`
      }
    }
  }
})
