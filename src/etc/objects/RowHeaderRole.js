/**
 * @flow
 */
const RowHeaderRole = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'rowheader',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'th',
        attributes: [
          {
            name: 'scope',
            value: 'row',
          },
        ],
      },
    },
  ],
  type: 'widget',
};

export default RowHeaderRole;