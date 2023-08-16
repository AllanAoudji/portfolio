import { defineField, defineType } from 'sanity';
import { BiCategory } from 'react-icons/bi';

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: BiCategory,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
