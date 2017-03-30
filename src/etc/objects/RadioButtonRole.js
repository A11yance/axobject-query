/**
 * @flow
 */
const RadioButtonRole = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'radio',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'radio',
          },
        ],
      },
    },
  ],
  type: 'widget',
};

export default RadioButtonRole;