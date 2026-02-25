import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Νέα & Ανακοινώσεις',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Τίτλος',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Ημερομηνία',
      type: 'datetime',
    }),
    defineField({
      name: 'mainImage',
      title: 'Εικόνα',
      type: 'image',
    }),
    defineField({
      name: 'excerpt',
      title: 'Περίληψη',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Κείμενο',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})