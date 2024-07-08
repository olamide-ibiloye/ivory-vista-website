import {defineType, defineField} from 'sanity'

export const ourServices = defineType({
  type: 'document',
  name: 'ourServices',
  title: 'Our Services Page',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'section', name: 'hero_section'}),
    defineField({type: 'sectionWithCards', name: 'our_services'}),
  ],
})
