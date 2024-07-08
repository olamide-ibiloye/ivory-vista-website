import {defineType, defineField, defineArrayMember} from 'sanity'

export const sectionWithCards = defineType({
  type: 'object',
  name: 'sectionWithCards',
  title: 'Section With Cards',
  fields: [
    defineField({
      type: 'array',
      name: 'cards',
      title: 'Information Card',
      of: [defineArrayMember({type: 'card'})],
    }),
  ],
})
