import {defineType, defineField} from 'sanity'

export const sectionImage = defineType({
  type: 'object',
  name: 'sectionImage',
  title: 'Section Image',
  fields: [
    defineField({type: 'string', name: 'alt_text'}),
    defineField({type: 'image', name: 'image'}),
  ],
})
