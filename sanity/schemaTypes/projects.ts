import {defineType, defineField} from 'sanity'

export const projects = defineType({
  type: 'document',
  name: 'projects',
  title: 'Projects Page',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'section', name: 'hero_section'}),
    defineField({type: 'sectionWithCards', name: 'our_projects'}),
  ],
})
