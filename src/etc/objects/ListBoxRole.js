/**
 * @flow
 */
const ListBoxRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'listbox',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'datalist',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'select',
      },
    },
  ],
  type: 'widget',
};

export default ListBoxRole;