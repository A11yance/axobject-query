/**
 * @flow
 */
const DialogRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'dialog',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'dialog',
      },
    },
  ],
  type: 'window',
};

export default DialogRole;