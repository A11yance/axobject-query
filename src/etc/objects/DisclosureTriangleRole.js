/**
 * @flow
 */
const DisclosureTriangleRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        attributes: [
          {
            name: 'open',
            value: 'open',
          },
        ],
        constraints: [
          'scoped to a details element',
        ],
        name: 'summary',
      },
    },
    {
      module: 'HTML',
      concept: {
        attributes: [
          {
            name: 'aria-expanded',
          },
        ],
        constraints: [
          'scoped to a details element',
        ],
        name: 'summary',
      },
    },
  ],
  type: 'widget',
};

export default DisclosureTriangleRole;