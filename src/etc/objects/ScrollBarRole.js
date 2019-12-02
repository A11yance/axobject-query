/**
 * @flow
 */
const ScrollBarRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'scrollbar',
      },
    },
  ],
  type: 'widget',
};

export default ScrollBarRole;