import {defineType, defineField, defineArrayMember} from 'sanity'

export const sectionWithPoints = defineType({
  type: 'object',
  name: 'sectionWithPoints',
  title: 'Section With Points',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'points', name: 'services'}),
    defineField({
      type: 'array',
      name: 'images',
      title: 'Section Image',
      of: [defineArrayMember({type: 'sectionImage'})],
    }),
  ],
})
