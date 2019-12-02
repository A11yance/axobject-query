/**
 * @flow
 */
const ButtonRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'button',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'button',
      },
    },
  ],
  type: 'widget',
};

export default ButtonRole;