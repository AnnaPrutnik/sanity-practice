import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'

export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  icon: PinIcon,
  fieldsets: [
    {name: 'location', title: 'venue location', options: {columns: 2, collapsible: true}},
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'city',
      type: 'string',
      fieldset: 'location',
    }),
    defineField({
      name: 'country',
      type: 'string',
      fieldset: 'location',
    }),
  ],
})
