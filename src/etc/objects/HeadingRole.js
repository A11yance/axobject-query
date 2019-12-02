/**
 * @flow
 */
const HeadingRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'heading',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h1',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h2',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h3',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h4',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h5',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h6',
      },
    },
  ],
  type: 'structure',
};

export default HeadingRole;