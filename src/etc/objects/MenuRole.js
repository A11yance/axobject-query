/**
 * @flow
 */
const MenuRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'menu',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'menu',
      },
    },
  ],
  type: 'structure',
};

export default MenuRole;