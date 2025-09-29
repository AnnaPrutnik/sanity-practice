import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().info('This field is important for...'),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
