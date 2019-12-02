/**
 * @flow
 */
const SliderRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'slider',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'range',
          },
        ],
      },
    },
  ],
  type: 'widget',
};

export default SliderRole;