/**
 * @flow
 */
const FigureRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'figure',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'figure',
      },
    },
  ],
  type: 'structure',
};

export default FigureRole;