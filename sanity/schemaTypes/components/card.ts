import {defineType, defineField, defineArrayMember} from 'sanity'

export const card = defineType({
  type: 'object',
  name: 'card',
  title: 'Card',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({
      type: 'array',
      name: 'body',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      type: 'array',
      name: 'images',
      title: 'Card Image',
      of: [defineArrayMember({type: 'sectionImage'})],
    }),
  ],
})
