/**
 * @flow
 */
const MainRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'main',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'main',
      },
    },
  ],
  type: 'structure',
};

export default MainRole;