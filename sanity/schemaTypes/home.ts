import {defineType, defineField} from 'sanity'

export const home = defineType({
  type: 'document',
  name: 'home',
  title: 'Home Page',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'section', name: 'hero_section'}),
    defineField({type: 'section', name: 'about_us_section'}),
    defineField({type: 'sectionWithPoints', name: 'our_services_section'}),
    defineField({type: 'point', name: 'projects_section'}),
  ],
})
