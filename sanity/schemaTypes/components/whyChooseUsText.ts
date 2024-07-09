import {defineType, defineField, defineArrayMember} from 'sanity'

export const whyChooseUsText = defineType({
  type: 'object',
  name: 'whyChooseUsText',
  title: 'Why Choose Us Text',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'text', name: 'subTitle'}),
    defineField({
      type: 'array',
      name: 'body',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})
