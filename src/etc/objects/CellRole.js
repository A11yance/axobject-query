/**
 * @flow
 */
const CellRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'cell',
      },
    },
    {
      module: 'ARIA',
      concept: {
        name: 'gridcell',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'td',
      },
    },
  ],
  type: 'widget',
};

export default CellRole;