import { defineType, defineField } from 'sanity';

export const subscribeButton = defineType({
  name: 'subscribeButton',
  title: 'Subscribe Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
    }),
  ],
});