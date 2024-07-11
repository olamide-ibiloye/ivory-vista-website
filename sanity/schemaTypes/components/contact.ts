import {defineType, defineField, defineArrayMember} from 'sanity'

export const contact = defineType({
  type: 'object',
  name: 'contact',
  title: 'Contact',
  fields: [
    defineField({
      type: 'array',
      name: 'images',
      title: 'Contact Section Image',
      of: [defineArrayMember({type: 'sectionImage'})],
    }),
  ],
})
