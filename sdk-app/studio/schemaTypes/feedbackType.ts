import {defineField, defineType} from 'sanity'

export const feedbackType = defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'text',
    }),
    defineField({
      name: 'author',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'sentiment',
      type: 'string',
      options: {list: ['positive', 'neutral', 'negative'], layout: 'radio'},
    }),
    defineField({
      name: 'status',
      type: 'string',
      options: {list: ['pending', 'approved', 'spam'], layout: 'radio'},
    }),
    defineField({
      name: 'assignee',
      type: 'string',
    }),
    defineField({
      name: 'notes',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'content',
      subtitle: 'author',
    },
  },
})
