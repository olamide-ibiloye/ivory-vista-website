import {defineType, defineField, defineArrayMember} from 'sanity'

export const section = defineType({
  type: 'object',
  name: 'section',
  title: 'Standard Section',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'text', name: 'body'}),
    defineField({type: 'string', name: 'buttonName'}),
    defineField({
      type: 'array',
      name: 'images',
      title: 'Section Images',
      of: [defineArrayMember({type: 'sectionImage'})],
    }),
  ],
})
