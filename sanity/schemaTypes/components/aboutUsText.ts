import {defineType, defineField, defineArrayMember} from 'sanity'

export const aboutUsText = defineType({
  type: 'object',
  name: 'aboutUsText',
  title: 'About Us Text',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({
      type: 'array',
      name: 'body',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})
