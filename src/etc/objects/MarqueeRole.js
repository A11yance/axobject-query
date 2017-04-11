/**
 * @flow
 */
const MarqueeRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'marquee',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'marquee',
      },
    },
  ],
  type: 'structure',
};

export default MarqueeRole;