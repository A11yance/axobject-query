/**
 * @flow
 */
const TabGroupRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'tablist',
      },
    },
  ],
  type: 'structure',
};

export default TabGroupRole;