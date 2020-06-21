/**
 * @flow
 */
const ComboBoxRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'combobox',
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

export default ComboBoxRole;