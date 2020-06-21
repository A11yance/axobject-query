/**
 * @flow
 */
const ColumnHeaderRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'columnheader',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'th',
      },
    },
  ],
  type: 'widget',
};

export default ColumnHeaderRole;