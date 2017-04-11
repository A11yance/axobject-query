/**
 * @flow
 */
const DateRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'date',
          },
        ],
      },
    },
  ],
  type: 'widget',
};

export default DateRole;