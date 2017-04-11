/**
 * @flow
 */
const ListRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'list',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'ul',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'ol',
      },
    },
  ],
  type: 'structure',
};

export default ListRole;