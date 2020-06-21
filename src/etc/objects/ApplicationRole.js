/**
 * @flow
 */
const ApplicationRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'application',
      },
    },
  ],
  type: 'window',
};

export default ApplicationRole;