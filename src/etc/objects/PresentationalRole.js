/**
 * @flow
 */
const PresentationalRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'presentation',
      },
    },
  ],
  type: 'structure',
};

export default PresentationalRole;