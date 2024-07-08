import {defineType, defineField} from 'sanity'

export const point = defineType({
  type: 'object',
  name: 'point',
  title: 'Point',
  fields: [defineField({type: 'string', name: 'title'}), defineField({type: 'text', name: 'body'})],
})
