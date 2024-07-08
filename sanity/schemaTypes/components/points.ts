import {defineType, defineField, defineArrayMember} from 'sanity'

export const points = defineType({
  type: 'object',
  name: 'points',
  title: 'Points',
  fields: [
    defineField({
      type: 'array',
      name: 'points',
      title: 'Section Points',
      of: [defineArrayMember({type: 'point'})],
    }),
  ],
})
