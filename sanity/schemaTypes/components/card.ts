import {defineType, defineField, defineArrayMember} from 'sanity'

export const card = defineType({
  type: 'object',
  name: 'card',
  title: 'Card',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'string', name: 'subTitle'}),
    defineField({type: 'text', name: 'body'}),
    defineField({
      type: 'array',
      name: 'images',
      title: 'Card Image',
      of: [defineArrayMember({type: 'sectionImage'})],
    }),
  ],
})
