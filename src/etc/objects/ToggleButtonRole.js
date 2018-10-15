/**
 * @flow
 */
const ToggleButtonRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'button',
        attributes: [
          {
            name: 'aria-pressed',
          },
        ],
      },
    },
  ],
  type: 'widget',
};

export default ToggleButtonRole;
