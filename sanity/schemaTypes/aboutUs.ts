import {defineType, defineField} from 'sanity'

export const aboutUs = defineType({
  type: 'document',
  name: 'aboutUs',
  title: 'About Us Page',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'section', name: 'hero_section'}),
    defineField({type: 'sectionWithPoints', name: 'our_vision_mission'}),
  ],
})
