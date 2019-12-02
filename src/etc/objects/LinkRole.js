/**
 * @flow
 */
const LinkRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'link',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'a',
        attributes: [
          {
            name: 'href',
          },
        ],
      },
    },
  ],
  type: 'widget',
};

export default LinkRole;