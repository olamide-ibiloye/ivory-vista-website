import {defineType, defineField} from 'sanity'

export const contactDetail = defineType({
  type: 'document',
  name: 'contactDetail',
  title: 'Contact Detail',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'contact', name: 'contact_image'}),
  ],
})
