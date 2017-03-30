/**
 * @flow
 */
const CheckBoxRole = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'checkbox',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'checkbox',
          },
        ],
      },
    },
  ],
  type: 'widget',
};

export default CheckBoxRole;