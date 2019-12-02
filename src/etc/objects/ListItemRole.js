/**
 * @flow
 */
const ListItemRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'listitem',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'li',
      },
    },
  ],
  type: 'structure',
};

export default ListItemRole;