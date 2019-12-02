/**
 * @flow
 */
const MenuItemRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'menuitem',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'menuitem',
      },
    },
  ],
  type: 'widget',
};

export default MenuItemRole;